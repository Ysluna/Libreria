import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { EditorialService } from './editorial.service';
import { CreateEditorialDto } from './dto/create-editorial.dto';
import { Editorial } from './editorial.entity';

@Controller('editorial')
export class EditorialController {
  constructor(private readonly editorialService: EditorialService) {}

  @Post()
  async create(@Body() createEditorialDto: CreateEditorialDto): Promise<Editorial> {
    return this.editorialService.create(createEditorialDto);
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Editorial> {
    return this.editorialService.findOne(id);
  }
}