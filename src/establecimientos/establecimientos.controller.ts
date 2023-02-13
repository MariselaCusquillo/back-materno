import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseUUIDPipe, } from '@nestjs/common';
import { EstablecimientosService } from './establecimientos.service';
import { PaginationDto } from 'src/common/dtos/pagination.dto';
import { CreateEstablecimientoDto } from './dto/create-establecimiento.dto';
import { UpdateEstablecimientoDto } from './dto/update-establecimiento.dto';


@Controller('establecimientos')
export class EstablecimientosController {
  constructor(private readonly establecimientosService: EstablecimientosService) {}

  @Post('crear')
  create(@Body() createEstablecimientoDto: CreateEstablecimientoDto) {
    return this.establecimientosService.create(createEstablecimientoDto);
  }

  
  @Get('listar')
  findAll(@Query() paginationDto: PaginationDto) {
    return this.establecimientosService.findAll(paginationDto);
  }


  @Get('buscar/:id')
  findOne(@Param('id') id: string) {
    return this.establecimientosService.findOne(id);
  }

  @Patch('update/:id')
  update(
    @Param('id', ParseUUIDPipe) id: string, 
    @Body() updateEstablecimientoDto: UpdateEstablecimientoDto) {
    return this.establecimientosService.update(id, updateEstablecimientoDto);
  }

  @Delete('eliminar/:id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.establecimientosService.remove(id);
  }
}
