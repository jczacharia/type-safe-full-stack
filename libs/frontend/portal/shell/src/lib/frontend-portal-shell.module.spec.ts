import { async, TestBed } from '@angular/core/testing';
import { FrontendPortalShellModule } from './frontend-portal-shell.module';

describe('FrontendPortalShellModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FrontendPortalShellModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FrontendPortalShellModule).toBeDefined();
  });
});
