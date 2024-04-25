import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Breed } from 'src/breeds/entities/breed.entity';
import { Repository } from 'typeorm';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Cat } from './entities/cat.entity';

@Injectable()
export class CatsService {
  constructor(
    @InjectRepository(Cat)
    private catsRepository: Repository<Cat>,

    @InjectRepository(Breed)
    private breedRepository: Repository<Breed>,
  ) {}

  async create(createCatDto: CreateCatDto) {
    const breed = await this.breedRepository.findOneBy({
      name: createCatDto.breed as string,
    });
    if (!breed) throw new BadRequestException('breed not found');

    const cat = this.catsRepository.create({
      ...createCatDto,
      breed,
    });
    return await this.catsRepository.save(cat);
  }

  async findAll() {
    return await this.catsRepository.find();
  }

  async findOne(id: number) {
    return await this.catsRepository.findOne({ where: { id } });
  }

  async update(id: number, updateCatDto: UpdateCatDto) {
    // return await this.catsRepository.update({ id }, updateCatDto);

    const breed = await this.breedRepository.findOneBy({
      name: updateCatDto.breed as string, // updateCatDto.breed as string,
    });
    if (!breed) throw new BadRequestException('breed not found');

    const cat = await this.catsRepository.update(
      { id },
      { ...updateCatDto, breed },
    ); // updateCatDto

    if (!cat) throw new BadRequestException('cat not found');

    return await this.catsRepository.findOne({ where: { id } });
  }

  async remove(id: number) {
    return await this.catsRepository.softDelete({ id });
  }
}
