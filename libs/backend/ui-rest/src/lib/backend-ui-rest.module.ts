import { BackendShellModule } from '@type-safe-full-stack/backend/shell';
import { Module } from '@nestjs/common';
import { UserProfileController } from './controllers/user-profile.controller';

@Module({
  imports: [BackendShellModule],
  controllers: [UserProfileController],
})
export class BackendUiRestModule {}
