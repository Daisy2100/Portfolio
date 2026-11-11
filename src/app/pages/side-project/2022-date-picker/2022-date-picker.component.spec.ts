import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { DatePicker2022Component } from './2022-date-picker.component';

describe('DatePicker2022Component', () => {
  let component: DatePicker2022Component;
  let fixture: ComponentFixture<DatePicker2022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatePicker2022Component],
      providers: [provideRouter([])]
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
