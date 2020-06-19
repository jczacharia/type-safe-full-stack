import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserProfileEntity } from '@type-safe-full-stack/backend/infrastructure';

const typeormModule = TypeOrmModule.forFeature([UserProfileEntity]);

@Module({
  imports: [typeormModule],
  exports: [typeormModule],
})
export class DbModule {}
