import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatBasicCheckboxesTres } from './mat-basic-checkboxes-tres';

describe('MatBasicCheckboxesTres', () => {
  let component: MatBasicCheckboxesTres;
  let fixture: ComponentFixture<MatBasicCheckboxesTres>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatBasicCheckboxesTres]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatBasicCheckboxesTres);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
