import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseUUIDPipe, } from '@nestjs/common';
import { PaginationDto } from 'src/common/dtos/pagination.dto';
import { Indicador1Service } from './indicador1.service';
import { CreateIndicador1Dto } from './dto/create-indicador1.dto';


@Controller('indicador1')
export class Indicador1Controller {
  constructor(private readonly indicador1Service: Indicador1Service) {}

  @Post('crear')
  create(@Body() createIndicador1Dto: CreateIndicador1Dto) {
    return this.indicador1Service.create(createIndicador1Dto);
  }

  @Get('listar')
  findAll(@Query() paginationDto: PaginationDto) {
    return this.indicador1Service.findAll(paginationDto);
  }


}
