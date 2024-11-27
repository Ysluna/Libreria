import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Libro } from './libro.entity';
import { LibroService } from './libro.services';
import { LibroController } from './libro.controller';
import { AutorModule } from '../Autor/autor.module'; 
import { EditorialModule } from '../Editorial/editorial.module'; 

@Module({
  imports: [
    TypeOrmModule.forFeature([Libro]),
    AutorModule, 
    EditorialModule, 
  ],
  controllers: [LibroController],
  providers: [LibroService], 
})
export class LibroModule {}