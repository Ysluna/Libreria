import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Autor } from './autor.entity'; 
import { CreateAutorDto } from './DTO/create-autor.dto';
import { UpdateAutorDto } from './DTO/update-autor.dto';

@Injectable()
export class AutorService {
  constructor(
    @InjectRepository(Autor)
    private readonly autorRepository: Repository<Autor>,
  ) {}

  async create(createAutorDto: CreateAutorDto): Promise<Autor> {
    const autorExistente = await this.autorRepository.findOne({
      where: { dni: createAutorDto.dni },
    });
    if (autorExistente) {
      throw new BadRequestException('Ya existe un autor con ese DNI');
    }

    const autor = this.autorRepository.create(createAutorDto); 
    return this.autorRepository.save(autor); 
  }

  async findAll(): Promise<Autor[]> {
    return this.autorRepository.find(); 
  }

  async findOne(id: number): Promise<Autor> {
    const autor = await this.autorRepository.findOne({
      where: { id }, 
    });

    if (!autor) {
      throw new NotFoundException(`Autor con ID ${id} no encontrado`);
    }

    return autor; 
  }

  async update(id: number, updateAutorDto: UpdateAutorDto): Promise<Autor> {
    const autor = await this.autorRepository.findOne({
      where: { id }, 
    });

    if (!autor) {
      throw new NotFoundException(`Autor con ID ${id} no encontrado`); 
    }

    Object.assign(autor, updateAutorDto);
    return this.autorRepository.save(autor); 
  }

  async remove(id: number): Promise<void> {
    const autor = await this.autorRepository.findOne({
      where: { id }, 
    });

    if (!autor) {
      throw new NotFoundException(`Autor con ID ${id} no encontrado`);
    }

    await this.autorRepository.remove(autor);
  }
}