import { async, TestBed } from '@angular/core/testing';
import { FrontendLoginDataAccessModule } from './frontend-login-data-access.module';

describe('FrontendLoginDataAccessModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FrontendLoginDataAccessModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FrontendLoginDataAccessModule).toBeDefined();
  });
});
