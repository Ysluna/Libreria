import { IsNotEmpty, Matches } from 'class-validator';

export class LibroDTO {
  @IsNotEmpty()
  titulo: string;

  @IsNotEmpty()
  categoriaLiteraria: string;

  @Matches(/^\d+(\.\d{1,2})?$/, { message: 'Precio inválido' })
  precio: number;

  @Matches(/^\d{2}\/\d{2}\/\d{4}$/, { message: 'Fecha de lanzamiento inválida' })
  fechaLanzamiento: string;

  @IsNotEmpty()
  descripcion: string;

  @IsNotEmpty()
  autorId: number;

  @IsNotEmpty()
  editorialId: number;
}