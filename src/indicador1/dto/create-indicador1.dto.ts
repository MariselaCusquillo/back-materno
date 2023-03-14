
import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateIndicador1Dto {

    @IsString()
    @IsNotEmpty()
    zona: string;

    @IsString()
    @IsNotEmpty()
    provincia: string;

    @IsString()
    @IsNotEmpty()
    distrito: string;

    @IsString()
    @IsNotEmpty()
    establecimiento: string;

    @IsString()
    @IsNotEmpty()
    fecha: string;

    @IsString()
    @IsNotEmpty()
    mes: string;

    @IsString()
    @IsNotEmpty()
    responsable: string;

    @IsString()
    @IsNotEmpty()
    fonendoscopio: string;

    @IsString()
    @IsNotEmpty()
    tensiometro: string;

    @IsString()
    @IsNotEmpty()
    cinta: string;

    @IsString()
    @IsNotEmpty()
    balanza: string;

    @IsString()
    @IsNotEmpty()
    termometro: string;

    @IsString()
    @IsNotEmpty()
    promedio: string;



    @IsString()
    @IsNotEmpty()
    lavado: string;

    @IsString()
    @IsNotEmpty()
    basureros: string;

    @IsString()
    @IsNotEmpty()
    fonendoscopioGine: string;

    @IsString()
    @IsNotEmpty()
    tensiometroGine: string;

    @IsString()
    @IsNotEmpty()
    termometroGine: string;

    @IsString()
    @IsNotEmpty()
    lampara: string;

    @IsString()
    @IsNotEmpty()
    camilla: string;

    @IsString()
    @IsNotEmpty()
    corneta: string;

    @IsString()
    @IsNotEmpty()
    cintaGine: string;

    @IsString()
    @IsNotEmpty()
    papelera: string;

    @IsString()
    @IsNotEmpty()
    guantes: string;

    @IsString()
    @IsNotEmpty()
    soluciones: string;

    @IsString()
    @IsNotEmpty()
    tirillas: string;

    @IsString()
    @IsNotEmpty()
    especulos: string;

    @IsString()
    @IsNotEmpty()
    espatulas: string;

    @IsString()
    @IsNotEmpty()
    solucionesGine: string;

    @IsString()
    @IsNotEmpty()
    hierro: string;

    @IsString()
    @IsNotEmpty()
    promedioGine: string;



    @IsString()
    @IsNotEmpty()
    numerador: string;

    @IsString()
    @IsNotEmpty()
    denominador: string;

    @IsString()
    @IsNotEmpty()
    promedioGeneral: string;

    
}

