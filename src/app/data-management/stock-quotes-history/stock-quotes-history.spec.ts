import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockQuotesHistory } from './stock-quotes-history';

describe('StockQuotesHistory', () => {
  let component: StockQuotesHistory;
  let fixture: ComponentFixture<StockQuotesHistory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockQuotesHistory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockQuotesHistory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
