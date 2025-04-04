import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { FieldMapping } from './models/fieldMapping.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      entities: [FieldMapping],
      autoLoadEntities: true,
      logging: true,
      synchronize: true,
    }),
  ],
})
export class AppModule {}