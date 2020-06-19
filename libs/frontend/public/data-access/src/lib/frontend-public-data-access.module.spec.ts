import { async, TestBed } from '@angular/core/testing';
import { FrontendPublicDataAccessModule } from './frontend-Public-data-access.module';

describe('FrontendPublicDataAccessModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FrontendPublicDataAccessModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FrontendPublicDataAccessModule).toBeDefined();
  });
});
