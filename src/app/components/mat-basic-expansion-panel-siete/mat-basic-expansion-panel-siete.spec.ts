import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatBasicExpansionPanelSiete } from './mat-basic-expansion-panel-siete';

describe('MatBasicExpansionPanelSiete', () => {
  let component: MatBasicExpansionPanelSiete;
  let fixture: ComponentFixture<MatBasicExpansionPanelSiete>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatBasicExpansionPanelSiete]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatBasicExpansionPanelSiete);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
