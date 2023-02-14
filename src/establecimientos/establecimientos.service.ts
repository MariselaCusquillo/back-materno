import {BadRequestException, Injectable,NotFoundException,} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ErrorHandleDBService } from 'src/common/services/errorHandleDBException';
import { CreateEstablecimientoDto } from './dto/create-establecimiento.dto';
import { UpdateEstablecimientoDto } from './dto/update-establecimiento.dto';
import { Establecimiento } from './entities/establecimiento.entity';
import { Repository } from 'typeorm';
import { PaginationDto } from 'src/common/dtos/pagination.dto';
import { validate as isUUID } from 'uuid';

@Injectable()
export class EstablecimientosService {

  constructor(
    @InjectRepository(Establecimiento)
    private readonly establecimientoRepository: Repository<Establecimiento>,
    private readonly errorHandleDBException: ErrorHandleDBService
  ) {}

  
  async create(createEstablecimientoDto: CreateEstablecimientoDto) {

    //verificar si ya existe el establ
   const establExist = await this.establecimientoRepository.findOne({
      where: {
        establecimiento: createEstablecimientoDto.establecimiento,
      },
   });

   if(establExist){
      
    //throw new BadRequestException ('El establecimiento ya se encuentra registrado');
      return {
        existe: true
      }
   }else{
    try {
      const { ...establecimientoData } = createEstablecimientoDto;
      const establecimiento = this.establecimientoRepository.create({
        ...establecimientoData,
      });
      await this.establecimientoRepository.save(establecimiento);
      return establecimiento;
    } catch (error) {
      this.errorHandleDBException.errorHandleDBException(error);
    }

   }

  }

  async findAll(paginationDto: PaginationDto) {
    const { limit = 10, offset = 0 } = paginationDto;
  
    return this.establecimientoRepository.find({
      take: limit,
      skip: offset,
    });
  }




  /*findOne(id: number) {
    return `This action returns a #${id} establecimiento`;
  }*/

  async findOne(id: string) {
    let establecimiento: Establecimiento;

    if (isUUID(id)) {
      establecimiento = await this.establecimientoRepository.findOne({
        where: {
          id_establecimiento: id,
        },
      });
    } else{
      if (!establecimiento)
      throw new NotFoundException(`Establecimiento con ID: ${id} no encontrado`);
    }
    return establecimiento;
    
  }

  async update(id: string, updateEstablecimientoDto) {
    //console.log(id,updateEstablecimientoDto);
    const establecimiento = await this.establecimientoRepository.preload({
      id_establecimiento: id,
      ...updateEstablecimientoDto,
    });
    if (!establecimiento)throw new NotFoundException(`Establecimiento con ID: ${id} no encontrado`);
    try {
      await this.establecimientoRepository.save(establecimiento);
      return establecimiento;
    } catch (error) {
      this.errorHandleDBException.errorHandleDBException(error);
    }
  }

  async remove(id: string) {
    //console.log(id);
    const deleteEstabl = await this.findOne(id);
    //console.log(deleteEstabl)
    await this.establecimientoRepository.remove(deleteEstabl);
  }

 
}
