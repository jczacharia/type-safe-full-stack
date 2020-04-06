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
        path: 'public',
        loadChildren: () =>
          import('@type-safe-full-stack/frontend/public/shell').then((m) => m.FrontendPublicShellModule),
      },
      {
        path: 'portal',
        loadChildren: () =>
          import('@type-safe-full-stack/frontend/portal/shell').then((m) => m.FrontendPortalShellModule),
      },
      { path: '**', redirectTo: 'public' },
    ]),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
