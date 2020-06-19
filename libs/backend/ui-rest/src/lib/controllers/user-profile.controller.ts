import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserProfileService } from '@type-safe-full-stack/backend/core/application-services';
import { IUserProfileGateway, UserProfile } from '@type-safe-full-stack/shared/domain';

@Controller('user-profile')
export class UserProfileController implements IUserProfileGateway {
  constructor(private readonly userProfileService: UserProfileService) {}

  @Get(`:id`)
  getUserProfile(@Param('id') userId: string): Promise<UserProfile | undefined> {
    return this.userProfileService.getUserProfile(userId);
  }

  @Post()
  createUserProfile(@Body() userProfile: UserProfile): Promise<UserProfile> {
    return this.userProfileService.createUserProfile(userProfile);
  }
}
