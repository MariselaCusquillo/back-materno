import { IsString, IsNotEmpty } from 'class-validator';
export class CreateEstablecimientoDto {

    @IsString()
    @IsNotEmpty()
    establecimiento: string;

    @IsString()
    @IsNotEmpty()
    provincia: string;

    @IsString()
    @IsNotEmpty()
    distrito: string;

    @IsString()
    @IsNotEmpty()
    tipo_atencion: string;

    @IsString()
    @IsNotEmpty()
    eod: string;

    @IsString()
    @IsNotEmpty()
     tipologia: string;
}
