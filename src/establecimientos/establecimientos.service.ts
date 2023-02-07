import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
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

  async findOne(term: string) {
    let establecimiento: Establecimiento;

    if (isUUID(term)) {
      establecimiento = await this.establecimientoRepository.findOne({
        where: {
          id_establecimiento: term,
        },
      });
    } else{
      if (!establecimiento)
      throw new NotFoundException(`Establecimiento con ID: ${term} no encontrado`);
      return establecimiento;
    }
    
  }

  async update(id: string, updateEstablecimientoDto: UpdateEstablecimientoDto) {
    const establecimiento = await this.establecimientoRepository.preload({
      id_establecimiento: id,
      ...updateEstablecimientoDto,
    });
    if (!establecimiento)
      throw new NotFoundException(`Establecimiento con ID: ${id} no encontrado`);
    try {
      await this.establecimientoRepository.save(establecimiento);
      return establecimiento;
    } catch (error) {
      this.errorHandleDBException.errorHandleDBException(error);
    }
  }

  async remove(id: string) {
    const deleteEstabl = await this.findOne(id);
    await this.establecimientoRepository.remove(deleteEstabl);
  }

 
}
