import { async, TestBed } from '@angular/core/testing';
import { FrontendLoginShellModule } from './frontend-login-shell.module';

describe('FrontendLoginShellModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FrontendLoginShellModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FrontendLoginShellModule).toBeDefined();
  });
});
