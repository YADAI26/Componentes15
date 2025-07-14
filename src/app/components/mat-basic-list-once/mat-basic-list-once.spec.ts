import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatBasicListOnce } from './mat-basic-list-once';

describe('MatBasicListOnce', () => {
  let component: MatBasicListOnce;
  let fixture: ComponentFixture<MatBasicListOnce>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatBasicListOnce]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatBasicListOnce);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
