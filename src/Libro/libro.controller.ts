import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { LibroService } from '../Libro/libro.services';
import { Libro } from './libro.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('libros')
@Controller('libros')
export class LibroController {
  constructor(private readonly libroService: LibroService) {}

  @Post()
  create(@Body() libro: Libro): Promise<Libro> {
    return this.libroService.create(libro);
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Libro> {
    return this.libroService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.libroService.remove(id);
  }
}