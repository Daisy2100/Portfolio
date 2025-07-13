import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DatePicker2022Component } from './2022-date-picker.component';

describe('DatePicker2022Component', () => {
  let component: DatePicker2022Component;
  let fixture: ComponentFixture<DatePicker2022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatePicker2022Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatePicker2022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
