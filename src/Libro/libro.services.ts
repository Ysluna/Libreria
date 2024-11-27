import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Libro } from './libro.entity';
import { AutorService } from '../Autor/autor.services';
import { EditorialService } from '../Editorial/editorial.service';

@Injectable()
export class LibroService {
  constructor(
    @InjectRepository(Libro)
    private libroRepository: Repository<Libro>,
    private autorService: AutorService,
    private editorialService: EditorialService,
  ) {}

  async create(libro: Libro): Promise<Libro> {
    const autor = await this.autorService.findOne(libro.autor.id);
    if (!autor) {
      throw new BadRequestException('El autor no existe');
    }

    const editorial = await this.editorialService.findOne(libro.editorial.id);
    if (!editorial) {
      throw new BadRequestException('La editorial no existe');
    }

    return this.libroRepository.save(libro);
  }

  async findOne(id: number): Promise<Libro> {
    const libro = await this.libroRepository.findOne({ 
      where: { id },
      relations: ['autor', 'editorial'],
    });

    if (!libro) {
      throw new BadRequestException('Libro no encontrado');
    }

    return libro;
  }

  async remove(id: number): Promise<void> {
    const libro = await this.libroRepository.findOne({ where: { id } });
    if (!libro) {
      throw new BadRequestException('Libro no encontrado');
    }
    await this.libroRepository.remove(libro);
  }
}