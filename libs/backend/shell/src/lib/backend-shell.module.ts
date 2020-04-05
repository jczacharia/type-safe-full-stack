import { UserProfileService } from '@type-safe-full-stack/backend/core/application-services';
import { IUserProfileDomainRepository } from '@type-safe-full-stack/backend/core/domain-services';
import { UserProfileRepositoryAdapter } from '@type-safe-full-stack/backend/infrastructure';
import { Global, Module, Provider } from '@nestjs/common';
import { DbModule } from './db.module';

const providers: Provider[] = [
  UserProfileService,
  {
    provide: IUserProfileDomainRepository,
    useClass: UserProfileRepositoryAdapter,
  },
];

@Global()
@Module({
  imports: [DbModule],
  providers: [...providers],
  exports: [DbModule, ...providers],
})
export class BackendShellModule {}
