import { IsString, IsNotEmpty, IsOptional, IsNumberString, Matches } from 'class-validator';

export class CreateEditorialDto {
  @IsNotEmpty()
  @IsString()
  nombre: string; 

  @IsNotEmpty()
  @IsString()
  direccion: string; 

  @IsNotEmpty()
  @IsNumberString()
  @Matches(/^\d{11}$/, { message: 'El CUIT debe tener exactamente 11 dígitos' })
  cuit: string; 
}