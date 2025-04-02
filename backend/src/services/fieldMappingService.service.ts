import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FieldMapping } from '../models/fieldMapping.entity';

@Injectable()
export class FieldMappingService {
  constructor(
    @InjectRepository(FieldMapping)
    private readonly fieldMappingRepository: Repository<FieldMapping>,
  ) {}

  async getAllMappings(): Promise<FieldMapping[]> {
    return this.fieldMappingRepository.find();
  }

  async createMapping(mapping: FieldMapping): Promise<FieldMapping> {
    return this.fieldMappingRepository.save(mapping);
  }

  async updateMapping(id: number, mapping: FieldMapping): Promise<FieldMapping> {
    await this.fieldMappingRepository.update(id, mapping);
    const updatedMapping = await this.fieldMappingRepository.findOneBy({ id });
    if (!updatedMapping) {
      throw new Error(`Mapping with id ${id} not found`);
    }
    return updatedMapping;
  }
}