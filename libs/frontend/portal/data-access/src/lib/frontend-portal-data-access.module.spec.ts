import { async, TestBed } from '@angular/core/testing';
import { FrontendPortalDataAccessModule } from './frontend-portal-data-access.module';

describe('FrontendPortalDataAccessModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FrontendPortalDataAccessModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FrontendPortalDataAccessModule).toBeDefined();
  });
});
