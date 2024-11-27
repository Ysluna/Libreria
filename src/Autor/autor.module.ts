import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AutorService } from './autor.services';
import { AutorController } from './autor.controller';
import { Autor } from './autor.entity';
import { Libro } from '../Libro/libro.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Autor, Libro])],
  providers: [AutorService], 
  controllers: [AutorController], 
  exports: [AutorService], 
})
export class AutorModule {}