import { UserProfileEntity } from '@type-safe-full-stack/backend/core/domain';
import { IUserProfileDomainRepository } from '@type-safe-full-stack/backend/core/domain-services';
import { ConflictException, Injectable } from '@nestjs/common';

@Injectable()
export class UserProfileService {
  constructor(private readonly userProfileRepo: IUserProfileDomainRepository) {}

  async createUserProfile(userProfile: UserProfileEntity): Promise<UserProfileEntity> {
    const res = await this.userProfileRepo.findOne(userProfile.id);
    if (res) throw new ConflictException(); // User profile already exists
    return await this.userProfileRepo.create(userProfile);
  }

  getUserProfile(userId: string): Promise<UserProfileEntity | undefined> {
    return this.userProfileRepo.findOne(userId);
  }
}
