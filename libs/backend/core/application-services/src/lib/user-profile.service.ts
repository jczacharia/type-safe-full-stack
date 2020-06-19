import { ConflictException, Injectable } from '@nestjs/common';
import { IUserProfileDomainRepository } from '@type-safe-full-stack/backend/core/domain-services';
import { UserProfile } from '@type-safe-full-stack/shared/domain';

@Injectable()
export class UserProfileService {
  constructor(private readonly userProfileRepo: IUserProfileDomainRepository) {}

  async createUserProfile(userProfile: UserProfile): Promise<UserProfile> {
    const res = await this.userProfileRepo.findOne(userProfile.id);
    if (res) throw new ConflictException(); // User profile already exists
    return await this.userProfileRepo.create(userProfile);
  }

  getUserProfile(userId: string): Promise<UserProfile | undefined> {
    return this.userProfileRepo.findOne(userId);
  }
}
