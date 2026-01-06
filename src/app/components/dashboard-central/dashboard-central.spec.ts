import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCentral } from './dashboard-central';

describe('DashboardCentral', () => {
  let component: DashboardCentral;
  let fixture: ComponentFixture<DashboardCentral>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardCentral]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardCentral);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
