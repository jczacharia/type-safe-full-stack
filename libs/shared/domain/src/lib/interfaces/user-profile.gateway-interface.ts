import { UserProfile } from '@type-safe-full-stack/shared/domain';

export interface IUserProfileGateway {
  getUserProfile(userId: string): Promise<UserProfile | undefined>;

  createUserProfile(userProfile: UserProfile): Promise<UserProfile>;
}
