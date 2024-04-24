import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BreedsModule } from 'src/breeds/breeds.module';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { Cat } from './entities/cat.entity';
import { BreedsService } from 'src/breeds/breeds.service';

@Module({
  imports: [TypeOrmModule.forFeature([Cat]), BreedsModule],
  controllers: [CatsController],
  providers: [CatsService, BreedsService],
})
export class CatsModule {}
