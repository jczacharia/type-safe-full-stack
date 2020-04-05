import { UserProfileEntity } from '@type-safe-full-stack/backend/core/domain';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

const typeormModule = TypeOrmModule.forFeature([UserProfileEntity]);

@Module({
  imports: [typeormModule],
  exports: [typeormModule],
})
export class DbModule {}
