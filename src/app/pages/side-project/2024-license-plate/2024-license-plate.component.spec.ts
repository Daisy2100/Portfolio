import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LicensePlate2024Component } from './2024-license-plate.component';

describe('LicensePlate2024Component', () => {
  let component: LicensePlate2024Component;
  let fixture: ComponentFixture<LicensePlate2024Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicensePlate2024Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicensePlate2024Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
