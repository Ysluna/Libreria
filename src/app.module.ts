import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Libro } from './Libro/libro.entity';
import { Autor } from './Autor/autor.entity';
import { Editorial } from './Editorial/editorial.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>('DB_HOST', 'localhost'),
        port: parseInt(process.env.DB_PORT, 10) || 3306,
        username: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || '0220',
        database: process.env.DB_NAME || 'libreria',
        entities: [Autor, Libro, Editorial],
        synchronize: true,
        logging: true,
      }),
    }),
  ],
})
export class AppModule {}

/*@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root', 
      password: '0220', 
      database: 'libreria', 
      entities: [Libro, Autor, Editorial], 
      synchronize: true, 
    }),
    LibroModule,
    AutorModule,
    EditorialModule,
  ],
})
export class AppModule {}*/
