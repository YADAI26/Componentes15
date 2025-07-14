import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatSimpleFormFieldOcho } from './mat-simple-form-field-ocho';

describe('MatSimpleFormFieldOcho', () => {
  let component: MatSimpleFormFieldOcho;
  let fixture: ComponentFixture<MatSimpleFormFieldOcho>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatSimpleFormFieldOcho]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatSimpleFormFieldOcho);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
