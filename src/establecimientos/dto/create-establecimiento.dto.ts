import { IsString, IsNotEmpty, IsNumber } from 'class-validator';
export class CreateEstablecimientoDto {

    @IsNumber()
    @IsNotEmpty()
    unicodigo: number;

    @IsString()
    @IsNotEmpty()
    establecimiento: string;

    @IsString()
    @IsNotEmpty()
    provincia: string;

   @IsString()
    @IsNotEmpty()
    canton: string;
    
    
    @IsString()
    @IsNotEmpty()
    parroquia: string;

    

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
