import { IsString, IsNumber, IsDateString, IsArray, IsOptional } from 'class-validator';

export class CreateLibroDto {
  @IsString()
  readonly titulo: string;

  @IsArray()
  @IsString({ each: true })
  readonly autores: string[];

  @IsNumber()
  readonly precio: number;

  @IsDateString()
  readonly fechaLanzamiento: string;

  @IsString()
  readonly categoriaLiteraria: string;

  @IsString()
  readonly descripcion: string;

  @IsOptional() 
  readonly editorialId: number;
}