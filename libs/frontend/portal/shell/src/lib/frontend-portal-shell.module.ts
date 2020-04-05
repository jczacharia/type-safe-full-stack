import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        loadChildren: () =>
          import('@type-safe-full-stack/frontend/portal/feature-home').then((m) => m.UserProfileModule),
      },
    ]),
  ],
})
export class FrontendPortalShellModule {}
