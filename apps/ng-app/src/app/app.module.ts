import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'login',
        loadChildren: () =>
          import('@type-safe-full-stack/frontend/login/shell').then((m) => m.FrontendLoginShellModule),
      },
      {
        path: 'portal',
        loadChildren: () =>
          import('@type-safe-full-stack/frontend/portal/shell').then((m) => m.FrontendPortalShellModule),
      },
      { path: '**', redirectTo: 'login' },
    ]),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
