import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatBasicDatepickerCinco } from './mat-basic-datepicker-cinco';

describe('MatBasicDatepickerCinco', () => {
  let component: MatBasicDatepickerCinco;
  let fixture: ComponentFixture<MatBasicDatepickerCinco>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatBasicDatepickerCinco]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatBasicDatepickerCinco);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
