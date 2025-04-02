import { Test, TestingModule } from '@nestjs/testing';
import { FieldMappingController } from '../controllers/fieldMapping.controller';
import { FieldMappingService } from '../services/fieldMappingService.service';
import { FieldMapping } from '../models/fieldMapping.entity';

describe('FieldMappingController', () => {
  let controller: FieldMappingController;
  let service: FieldMappingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FieldMappingController],
      providers: [
        {
          provide: FieldMappingService,
          useValue: {
            getAllMappings: jest.fn().mockResolvedValue([
              { id: 1, ehrSystem: 'Athena', inputField: 'name', ehrField: 'PATIENT_IDENT_NAME' },
            ]),
            createMapping: jest.fn().mockResolvedValue({
              id: 2,
              ehrSystem: 'Allscripts',
              inputField: 'gender',
              ehrField: 'GENDER_PAT',
            }),
            updateMapping: jest.fn().mockResolvedValue({
              id: 1,
              ehrSystem: 'Athena',
              inputField: 'name',
              ehrField: 'PATIENT_IDENT_NAME_UPDATED',
            }),
          },
        },
      ],
    }).compile();

    controller = module.get<FieldMappingController>(FieldMappingController);
    service = module.get<FieldMappingService>(FieldMappingService);
  });

  it('should return all mappings', async () => {
    const mappings = await controller.getAllMappings();
    expect(mappings).toEqual([
      { id: 1, ehrSystem: 'Athena', inputField: 'name', ehrField: 'PATIENT_IDENT_NAME' },
    ]);
    expect(service.getAllMappings).toHaveBeenCalled();
  });

  it('should save a new mapping', async () => {
    const newMapping = await controller.createMapping({
      ehrSystem: 'Allscripts',
      inputField: 'gender',
      ehrField: 'GENDER_PAT',
    } as FieldMapping);
    expect(newMapping).toEqual({
      id: 2,
      ehrSystem: 'Allscripts',
      inputField: 'gender',
      ehrField: 'GENDER_PAT',
    });
    expect(service.createMapping).toHaveBeenCalledWith({
      ehrSystem: 'Allscripts',
      inputField: 'gender',
      ehrField: 'GENDER_PAT',
    });
  });

  it('should update an existing mapping', async () => {
    const updatedMapping = await controller.updateMapping(1, {
      ehrSystem: 'Athena',
      inputField: 'name',
      ehrField: 'PATIENT_IDENT_NAME_UPDATED',
    } as FieldMapping);
    expect(updatedMapping).toEqual({
      id: 1,
      ehrSystem: 'Athena',
      inputField: 'name',
      ehrField: 'PATIENT_IDENT_NAME_UPDATED',
    });
    expect(service.updateMapping).toHaveBeenCalledWith(1, {
      ehrSystem: 'Athena',
      inputField: 'name',
      ehrField: 'PATIENT_IDENT_NAME_UPDATED',
    });
  });
});