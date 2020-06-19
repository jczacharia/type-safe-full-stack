import { UserProfile } from '@type-safe-full-stack/shared/domain';

export abstract class IUserProfileDomainRepository {
  abstract findOneOrFail(userId: string): Promise<UserProfile>;

  abstract findOne(userId: string): Promise<UserProfile | undefined>;

  abstract create(userProfile: UserProfile): Promise<UserProfile>;
}
