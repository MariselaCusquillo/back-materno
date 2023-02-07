import { Module } from '@nestjs/common';
import { EstablecimientosService } from './establecimientos.service';
import { EstablecimientosController } from './establecimientos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Establecimiento } from './entities/establecimiento.entity';
import { ErrorHandleDBService } from 'src/common/services/errorHandleDBException';
import { ConfigModule } from '@nestjs/config';

@Module({
  controllers: [EstablecimientosController],
  providers: [EstablecimientosService,  ErrorHandleDBService],
  imports: [
    ConfigModule,
    TypeOrmModule.forFeature([Establecimiento]),
  ],
})
export class EstablecimientosModule {}
