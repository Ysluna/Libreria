import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { AutorService } from '../Autor/autor.services';
import { CreateAutorDto } from './dto/create-autor.dto';
import { Autor } from './autor.entity';

@Controller('autor')
export class AutorController {
  constructor(private readonly autorService: AutorService) {}

  @Post()
  async create(@Body() createAutorDto: CreateAutorDto): Promise<Autor> {
    return this.autorService.create(createAutorDto);
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Autor> {
    return this.autorService.findOne(id);
  }
}