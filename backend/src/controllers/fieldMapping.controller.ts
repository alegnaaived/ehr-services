import { Controller, Get, Post, Body, Put, Param } from '@nestjs/common';
import { FieldMapping } from '../models/fieldMapping.entity';
import { FieldMappingService } from '../services/fieldMappingService.service';

@Controller('mappings')
export class FieldMappingController {
  constructor(private readonly fieldMappingService: FieldMappingService) {}

  @Get()
  async getAllMappings(): Promise<FieldMapping[]> {
    return this.fieldMappingService.getAllMappings();
  }

  @Post()
  async createMapping(@Body() mapping: FieldMapping): Promise<FieldMapping> {
    return this.fieldMappingService.createMapping(mapping);
  }

  @Put(':id')
  async updateMapping(@Param('id') id: number, @Body() mapping: FieldMapping): Promise<FieldMapping> {
    return this.fieldMappingService.updateMapping(id, mapping);
  }
}