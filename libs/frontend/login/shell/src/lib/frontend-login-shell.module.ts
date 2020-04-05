import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        loadChildren: () =>
          import('@type-safe-full-stack/frontend/login/feature-login').then((m) => m.LoginPageModule),
      },
    ]),
  ],
})
export class FrontendLoginShellModule {}
