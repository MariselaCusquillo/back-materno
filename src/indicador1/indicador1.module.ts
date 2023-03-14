import { Module } from '@nestjs/common';
import { Indicador1Service } from './indicador1.service';
import { Indicador1Controller } from './indicador1.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Indicador1 } from './entities/indicador1.entity';
import { ErrorHandleDBService } from 'src/common/services/errorHandleDBException';
import { ConfigModule } from '@nestjs/config';

@Module({
  controllers: [Indicador1Controller],
  providers: [Indicador1Service, ErrorHandleDBService],
  imports: [
    ConfigModule,
    TypeOrmModule.forFeature([Indicador1]),
  ],
  exports:[
    Indicador1Module
  ]
})
export class Indicador1Module {}
