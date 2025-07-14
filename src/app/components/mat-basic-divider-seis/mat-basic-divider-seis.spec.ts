import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatBasicDividerSeis } from './mat-basic-divider-seis';

describe('MatBasicDividerSeis', () => {
  let component: MatBasicDividerSeis;
  let fixture: ComponentFixture<MatBasicDividerSeis>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatBasicDividerSeis]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatBasicDividerSeis);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
