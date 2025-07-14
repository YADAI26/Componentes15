import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatBasicRadiosTrece } from './mat-basic-radios-trece';

describe('MatBasicRadiosTrece', () => {
  let component: MatBasicRadiosTrece;
  let fixture: ComponentFixture<MatBasicRadiosTrece>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatBasicRadiosTrece]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatBasicRadiosTrece);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
