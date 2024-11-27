import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EditorialService } from './editorial.service';
import { EditorialController } from '../Editorial/editorial.controller';
import { Editorial } from './editorial.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Editorial])], 
  providers: [EditorialService], 
  controllers: [EditorialController], 
})
export class EditorialModule {}