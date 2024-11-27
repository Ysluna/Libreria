import { IsString, IsNumber, IsDateString, IsArray, IsOptional } from 'class-validator';

export class UpdateLibroDto {
  @IsString()
  @IsOptional()
  readonly titulo?: string;

  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  readonly autores?: string[]; 

  @IsNumber()
  @IsOptional()
  readonly precio?: number;

  @IsDateString()
  @IsOptional()
  readonly fechaLanzamiento?: string;

  @IsString()
  @IsOptional()
  readonly categoriaLiteraria?: string;

  @IsString()
  @IsOptional()
  readonly descripcion?: string;

  @IsOptional()
  @IsNumber()
  readonly editorialId?: number; 
}