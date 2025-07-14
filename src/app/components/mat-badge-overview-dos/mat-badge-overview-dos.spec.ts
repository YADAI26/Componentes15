import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatBadgeOverviewDos } from './mat-badge-overview-dos';

describe('MatBadgeOverviewDos', () => {
  let component: MatBadgeOverviewDos;
  let fixture: ComponentFixture<MatBadgeOverviewDos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatBadgeOverviewDos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatBadgeOverviewDos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
