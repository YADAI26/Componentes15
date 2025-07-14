import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatAutocompleteUno } from './mat-autocomplete-uno';

describe('MatAutocompleteUno', () => {
  let component: MatAutocompleteUno;
  let fixture: ComponentFixture<MatAutocompleteUno>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatAutocompleteUno]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatAutocompleteUno);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
