import { async, TestBed } from '@angular/core/testing';
import { FrontendPublicShellModule } from './frontend-Public-shell.module';

describe('FrontendPublicShellModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FrontendPublicShellModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FrontendPublicShellModule).toBeDefined();
  });
});
