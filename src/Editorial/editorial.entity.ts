import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Libro } from '../libro/libro.entity';  

@Entity()
export class Editorial {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  direccion: string;

  @Column()
  cuit: string;

  @OneToMany(() => Libro, libro => libro.editorial)  
  libros: Libro[];
}