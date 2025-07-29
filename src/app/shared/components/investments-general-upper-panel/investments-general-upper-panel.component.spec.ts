import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentsGeneralUpperPanelComponent } from './investments-general-upper-panel.component';

describe('InvestmentsGeneralUpperPanelComponent', () => {
  let component: InvestmentsGeneralUpperPanelComponent;
  let fixture: ComponentFixture<InvestmentsGeneralUpperPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestmentsGeneralUpperPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestmentsGeneralUpperPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
