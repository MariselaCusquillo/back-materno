import {Controller,Get,Post,Body,Patch,Param,Delete,Query,ParseUUIDPipe,  UnauthorizedException, Req} from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { PaginationDto } from 'src/common/dtos/pagination.dto';
import { AuthDto } from './dto/auth.dto';
import { Usuario } from './entities/usuario.entity';


//import { UseGuards } from '@nestjs/common';
import { ChangePasswordDto } from './dto/changePassword.dto';





@Controller('user')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post('register')
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuarioService.create(createUsuarioDto);
  }

  @Post('login')
  login(@Body() authDto: AuthDto) {
    return this.usuarioService.loginUser(authDto);
  }


  @Get('listar')
  findAll(@Query() paginationDto: PaginationDto) {
    return this.usuarioService.findAll(paginationDto);
  }

  @Get('buscar/:id')
  findOne(@Param('id') id: string) {
    return this.usuarioService.findOne(id);
  }

  @Patch('update/:id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateUsuarioDto: UpdateUsuarioDto,
  ) {
    return this.usuarioService.update(id, updateUsuarioDto);
  }

  @Delete('delete/:id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.usuarioService.remove(id);
  }
  

  
  @Patch('change-password/:id_usuario')
  async changePassword(@Body() changePasswordDto: ChangePasswordDto,@Param('id_usuario') id_usuario: string) {
    const user = await this.usuarioService.changePassword(id_usuario, changePasswordDto);
    return user;
  }


  
  


  
}
