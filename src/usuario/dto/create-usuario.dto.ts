import { IsString, MaxLength, MinLength } from 'class-validator';

export class CreateUsuarioDto {
 
  @IsString()
  user: string;

  @IsString()
  @MinLength(6)
  @MaxLength(32)
  password: string;

  @IsString()
  tipologia: string;

  @IsString()
  tipo_usuario: string;

  @IsString()
  tipo_atencion: string;

  @IsString()
  establecimiento: string;

  @IsString()
  provincia: string;

  @IsString()
  distrito: string;

  @IsString()
  role: string;
  
}
