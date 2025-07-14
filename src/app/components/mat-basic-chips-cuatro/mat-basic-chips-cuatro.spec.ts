import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatBasicChipsCuatro } from './mat-basic-chips-cuatro';

describe('MatBasicChipsCuatro', () => {
  let component: MatBasicChipsCuatro;
  let fixture: ComponentFixture<MatBasicChipsCuatro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatBasicChipsCuatro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatBasicChipsCuatro);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
