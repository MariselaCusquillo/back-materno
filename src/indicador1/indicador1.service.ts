import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ErrorHandleDBService } from 'src/common/services/errorHandleDBException';
import { CreateIndicador1Dto } from './dto/create-indicador1.dto';
import { Indicador1 } from './entities/indicador1.entity';
import { Repository } from 'typeorm';
import { PaginationDto } from 'src/common/dtos/pagination.dto';
import { validate as isUUID } from 'uuid';


@Injectable()
export class Indicador1Service {

  
  constructor(
    @InjectRepository(Indicador1)
    private readonly indicador1Repository: Repository<Indicador1>,
    private readonly errorHandleDBException: ErrorHandleDBService
  ){}



  async create(createIndicador1Dto: CreateIndicador1Dto) {
    try {
      const { ...indicador1Data } = createIndicador1Dto;
      const indicador1 = this.indicador1Repository.create({
        ...indicador1Data,
      });
      await this.indicador1Repository.save(indicador1);
      return indicador1;
    } catch (error) {
      this.errorHandleDBException.errorHandleDBException(error);
    }
  }

  async findAll(paginationDto: PaginationDto) {
    const { limit = 10, offset = 0 } = paginationDto;
  
    return this.indicador1Repository.find({
      take: limit,
      skip: offset,
    });
  }

}
