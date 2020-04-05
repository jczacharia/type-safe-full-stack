import { UserProfileEntity } from '@type-safe-full-stack/backend/core/domain';

export abstract class IUserProfileDomainRepository {
  abstract findOneOrFail(userId: string): Promise<UserProfileEntity>;

  abstract findOne(userId: string): Promise<UserProfileEntity | undefined>;

  abstract create(userProfile: UserProfileEntity): Promise<UserProfileEntity>;
}
