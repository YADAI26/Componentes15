import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatIndeterminateProgressBarDoce } from './mat-indeterminate-progress-bar-doce';

describe('MatIndeterminateProgressBarDoce', () => {
  let component: MatIndeterminateProgressBarDoce;
  let fixture: ComponentFixture<MatIndeterminateProgressBarDoce>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatIndeterminateProgressBarDoce]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatIndeterminateProgressBarDoce);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
