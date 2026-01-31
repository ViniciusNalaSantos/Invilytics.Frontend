import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatrimonyGrowthComponent } from './patrimony-growth.component';

describe('PatrimonyGrowthComponent', () => {
  let component: PatrimonyGrowthComponent;
  let fixture: ComponentFixture<PatrimonyGrowthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatrimonyGrowthComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatrimonyGrowthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
