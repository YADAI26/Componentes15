import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatBasicSnackBarQuince } from './mat-basic-snack-bar-quince';

describe('MatBasicSnackBarQuince', () => {
  let component: MatBasicSnackBarQuince;
  let fixture: ComponentFixture<MatBasicSnackBarQuince>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatBasicSnackBarQuince]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatBasicSnackBarQuince);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
