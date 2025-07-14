import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatBasicIconsNueve } from './mat-basic-icons-nueve';

describe('MatBasicIconsNueve', () => {
  let component: MatBasicIconsNueve;
  let fixture: ComponentFixture<MatBasicIconsNueve>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatBasicIconsNueve]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatBasicIconsNueve);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
