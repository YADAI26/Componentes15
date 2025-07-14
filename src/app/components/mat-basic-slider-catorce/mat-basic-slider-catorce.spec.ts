import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatBasicSliderCatorce } from './mat-basic-slider-catorce';

describe('MatBasicSliderCatorce', () => {
  let component: MatBasicSliderCatorce;
  let fixture: ComponentFixture<MatBasicSliderCatorce>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatBasicSliderCatorce]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatBasicSliderCatorce);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
