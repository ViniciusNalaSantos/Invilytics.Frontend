import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentsOverviewComponent } from './investments-overview.component';

describe('InvestmentsOverviewComponent', () => {
  let component: InvestmentsOverviewComponent;
  let fixture: ComponentFixture<InvestmentsOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestmentsOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestmentsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
