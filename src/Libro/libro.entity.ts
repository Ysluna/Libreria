import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Editorial } from '../Editorial/editorial.entity';  
import { Autor } from '../Autor/autor.entity';  

@Entity()
export class Libro {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titulo: string;

  @ManyToOne(() => Editorial, editorial => editorial.libros)  
  editorial: Editorial;

  @ManyToOne(() => Autor, (autor) => autor.libros)  
  @JoinColumn({ name: 'autor_id' })
  autor: Autor;  
}