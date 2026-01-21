import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackedBarGraph } from './stacked-bar-graph';

describe('StackedBarGraph', () => {
  let component: StackedBarGraph;
  let fixture: ComponentFixture<StackedBarGraph>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StackedBarGraph]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StackedBarGraph);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
