import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributionDetailedComponent } from './distribution-detailed.component';

describe('DistributionDetailedComponent', () => {
  let component: DistributionDetailedComponent;
  let fixture: ComponentFixture<DistributionDetailedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DistributionDetailedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistributionDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
