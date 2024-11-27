import { IsString, IsOptional, IsNumberString, Matches } from 'class-validator';

export class UpdateEditorialDto {
  @IsOptional()
  @IsString()
  nombre?: string; 

  @IsOptional()
  @IsString()
  direccion?: string;

  @IsOptional()
  @IsNumberString()
  @Matches(/^\d{11}$/, { message: 'El CUIT debe tener exactamente 11 dígitos' })
  cuit?: string; 
}