import {Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ErrorHandleDBService } from 'src/common/services/errorHandleDBException';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';
import { Repository } from 'typeorm';
import { PaginationDto } from 'src/common/dtos/pagination.dto';
import { validate as isUUID } from 'uuid';
import * as bcrypt from 'bcrypt';
import { AuthDto } from './dto/auth.dto';
import { IJwtPayload } from './interfaces/jwt-payload.interface';
import { JwtService } from '@nestjs/jwt';
import { ChangePasswordDto } from './dto/changePassword.dto';







@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
    private readonly errorHandleDBException: ErrorHandleDBService,
    private readonly jwtService: JwtService,
  ) {}

  async create(createUsuarioDto: CreateUsuarioDto) {
    //verificar si ya existe el user
   const userExist = await this.usuarioRepository.findOne({
    where: {
      user: createUsuarioDto.user,
    },
 });

 if(userExist){
    return {
      existe: true
    }
  //throw new BadRequestException('La cuenta ya se encuentra registrada');
 }else{
    try {
      const { password, ...usuarioData } = createUsuarioDto;
      const usuario = this.usuarioRepository.create({
        ...usuarioData,
        password: bcrypt.hashSync(password, 10),
      });
      await this.usuarioRepository.save(usuario);
      delete usuario.password;
      return usuario;
    } catch (error) {
      this.errorHandleDBException.errorHandleDBException(error);
    }
  }
  }

  async findAll(paginationDto: PaginationDto) {
    const { limit = 10, offset = 0 } = paginationDto;

    return this.usuarioRepository.find({
      take: limit,
      skip: offset,
    });
  }

  async findOne(id: string) {
    let user: Usuario;
    try {
      if (isUUID(id)) {
        user = await this.usuarioRepository.findOne({
          where: {
            id_usuario: id,
          },
        });
      } 
    } catch (error) {

      this.errorHandleDBException.errorHandleDBException(error);
    }
    
    if (!user)
      throw new NotFoundException(`Usuario con ID: ${id} no encontrado`);
    return user;
  }

  async update(id: string, updateUsuarioDto) {
    const user = await this.usuarioRepository.preload({
      id_usuario: id,
      ...updateUsuarioDto,
    });
    if (!user)
      throw new NotFoundException(`Usuario con ID: ${id} no encontrado`);
    try {
      await this.usuarioRepository.save(user);
      return user;
    } catch (error) {
      this.errorHandleDBException.errorHandleDBException(error);
    }
  }

  async remove(id: string) {
    const deleteUsuario = await this.findOne(id);
    await this.usuarioRepository.remove(deleteUsuario);
  }

  async loginUser(authDto: AuthDto) {
    const { user, password } = authDto;
    //console.log(user,password);
    const user_info = await this.usuarioRepository.findOne({
      where: { user },
      select: {
        user: true,
        password: true,
        role: true,
        id_usuario: true,
      },
    });
    //console.log("datis =>",user_info);
    if (!user_info) {
      throw new UnauthorizedException('Las credenciales no son válidas');
      return;
    }
    if (!bcrypt.compareSync(password, user_info.password)) {
      throw new UnauthorizedException('Las credenciales no son válidas');
    }
    //console.log("paso ifs")
    return {
      Ok: true,
      //precaución inSQL !!
      ...user_info,
      token: this.getJwtToken({ id_usuario: user_info.id_usuario }),
    };
  }

  private getJwtToken(payload: IJwtPayload) {
    const token = this.jwtService.sign(payload);
    return token;
  }



   async changePassword(
    id: string,
    change: ChangePasswordDto
  ) {
    const {oldPassword,newPassword} = change;
    const user = await this.usuarioRepository.findOne({
      where: {
        id_usuario: id,
      },
      select: {
        user: true,
        password: true,
        role: true,
        id_usuario: true,
      }
    });
    //console.log(user);
    if (!user) {
      return{
        status: false,
        message:'El usuario no existe'
      }
    }

    const passwordMatch = await bcrypt.compareSync(oldPassword, user.password);

    if (!passwordMatch) {
      return{
        status: false,
        message: 'La contraseña antigua es incorrecta'
      } 
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(newPassword, saltRounds);

    user.password = hashedPassword;
    try{
      await this.usuarioRepository.save(user);
      return{
        status: true,
        message:'Contraseña actualizada con éxito'
      }
    }catch{
      return{
        status:false,
        error: 'Ocurrio algo al cambiar la contraseña.'
      }
    }
  }
  

  

  
}
