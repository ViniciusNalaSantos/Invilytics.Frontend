import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentsGeneralInformationsComponent } from './investments-general-informations.component';

describe('InvestmentsGeneralInformationsComponent', () => {
  let component: InvestmentsGeneralInformationsComponent;
  let fixture: ComponentFixture<InvestmentsGeneralInformationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestmentsGeneralInformationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestmentsGeneralInformationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
