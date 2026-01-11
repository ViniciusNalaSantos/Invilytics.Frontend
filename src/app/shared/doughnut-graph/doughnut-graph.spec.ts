import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoughnutGraph } from './doughnut-graph';

describe('DoughnutGraph', () => {
  let component: DoughnutGraph;
  let fixture: ComponentFixture<DoughnutGraph>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoughnutGraph]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoughnutGraph);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
