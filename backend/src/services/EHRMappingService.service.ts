import { Injectable, BadRequestException, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FieldMapping } from '../models/fieldMapping.entity';

@Injectable()
export class EHRMappingService {
  private readonly logger = new Logger(EHRMappingService.name);

  constructor(
    @InjectRepository(FieldMapping)
    private readonly fieldMappingRepository: Repository<FieldMapping>,
  ) {}

  async mapDataToEHR(inputData: any, ehrSystem: string): Promise<any> {
    this.logger.log(`Mapping data for EHR system: ${ehrSystem}`);

    // Fetch mappings for the specified EHR system
    const mappings = await this.fieldMappingRepository.find({ where: { ehrSystem } });
    if (!mappings.length) {
      throw new BadRequestException(`No mappings found for EHR system: ${ehrSystem}`);
    }

    const mappedData = {};

    // Map input data to EHR fields
    mappings.forEach((mapping) => {
      const inputField = mapping.inputField;
      const ehrField = mapping.ehrField;

      if (inputData[inputField] !== undefined) {
        mappedData[ehrField] = inputData[inputField];
      } else {
        this.logger.warn(`Input field "${inputField}" is missing in the provided data.`);
      }
    });

    this.logger.log(`Mapped data: ${JSON.stringify(mappedData)}`);
    return mappedData;
  }
}