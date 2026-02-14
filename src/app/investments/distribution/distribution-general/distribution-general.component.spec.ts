import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributionGeneralComponent } from './distribution-general.component';

describe('DistributionGeneralComponent', () => {
  let component: DistributionGeneralComponent;
  let fixture: ComponentFixture<DistributionGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DistributionGeneralComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistributionGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
