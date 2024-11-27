import { IsString, IsOptional, IsNumberString, Matches } from 'class-validator';

export class UpdateAutorDto {
  @IsOptional() 
  @IsString()
  nombre?: string; 

  @IsOptional()
  @IsString()
  apellido?: string; 

  @IsOptional()
  @IsNumberString() 
  @Matches(/^\d{8}$/, { message: 'El DNI debe tener exactamente 8 dígitos' }) 
  dni?: string; 

  @IsOptional()
  @IsString()
  nacionalidad?: string; 
}