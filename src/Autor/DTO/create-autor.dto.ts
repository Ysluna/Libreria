import { IsString, IsNotEmpty, IsNumberString, Matches } from 'class-validator';

export class CreateAutorDto {
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsNotEmpty()
  @IsString()
  apellido: string;

  @IsNotEmpty()
  @IsNumberString() 
  @Matches(/^\d{8}$/, { message: 'El DNI debe tener exactamente 8 dígitos' }) 
  dni: string; 

  @IsNotEmpty()
  @IsString()
  nacionalidad: string; 
}