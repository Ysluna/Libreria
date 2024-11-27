import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Editorial } from './editorial.entity'; 
import { CreateEditorialDto } from './DTO/create-editorial.dto'; 
import { UpdateEditorialDto } from './DTO/update-editorial.dto'; 

@Injectable()
export class EditorialService {
  constructor(
    @InjectRepository(Editorial)
    private editorialRepository: Repository<Editorial>,
  ) {}

  async create(createEditorialDto: CreateEditorialDto): Promise<Editorial> {
    const editorial = this.editorialRepository.create(createEditorialDto); 
    return await this.editorialRepository.save(editorial);
  }

  async findAll(): Promise<Editorial[]> {
    return await this.editorialRepository.find(); 
  }

  async findOne(id: number): Promise<Editorial> {
    const editorial = await this.editorialRepository.findOne({
      where: { id }, 
    }); 
    if (!editorial) {
      throw new NotFoundException(`Editorial con ID ${id} no encontrada.`);
    }
    return editorial; 
  } 

  async update(id: number, updateEditorialDto: UpdateEditorialDto): Promise<Editorial> {
    const editorial = await this.editorialRepository.preload({
      id, 
      ...updateEditorialDto, 
    });
    if (!editorial) {
      throw new NotFoundException(`Editorial con ID ${id} no encontrada.`); 
    }
    return this.editorialRepository.save(editorial); 
  }

  async remove(id: number): Promise<void> {
    const editorial = await this.findOne(id); 
    await this.editorialRepository.remove(editorial); 
  }
}