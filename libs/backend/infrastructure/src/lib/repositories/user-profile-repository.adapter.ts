import { InjectRepository } from '@nestjs/typeorm';
import { IUserProfileDomainRepository } from '@type-safe-full-stack/backend/core/domain-services';
import { Repository } from 'typeorm';
import { UserProfileEntity } from '../entities/user-profile.entity';

export class UserProfileRepositoryAdapter implements IUserProfileDomainRepository {
  constructor(
    @InjectRepository(UserProfileEntity) private readonly userProfileRepo: Repository<UserProfileEntity>
  ) {}

  findOneOrFail(userId: string): Promise<UserProfileEntity> {
    return this.userProfileRepo.findOneOrFail(userId);
  }

  findOne(userId: string): Promise<UserProfileEntity | undefined> {
    return this.userProfileRepo.findOne(userId);
  }

  create(userProfile: UserProfileEntity): Promise<UserProfileEntity> {
    return this.userProfileRepo.save(userProfile);
  }
}
