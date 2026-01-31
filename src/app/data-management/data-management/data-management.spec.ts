import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataManagement } from './data-management';

describe('DataManagement', () => {
  let component: DataManagement;
  let fixture: ComponentFixture<DataManagement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataManagement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataManagement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
