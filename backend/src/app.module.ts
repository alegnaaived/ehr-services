import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { FieldMapping } from './models/fieldMapping.entity';
import { FieldMappingController } from './controllers/fieldMapping.controller';
import { FieldMappingService } from './services/fieldMappingService.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), 
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'db',
      port: parseInt(process.env.POSTGRES_PORT || '5432', 10),
      username: process.env.POSTGRES_USER || 'postgres',
      password: process.env.POSTGRES_PASSWORD || 'postgres',
      database: process.env.POSTGRES_DB || 'postgres',
      entities: [FieldMapping],
      synchronize: true,
      autoLoadEntities: true,
    }),
  ],
  controllers: [FieldMappingController],
  providers: [FieldMappingService],
})
export class AppModule {}