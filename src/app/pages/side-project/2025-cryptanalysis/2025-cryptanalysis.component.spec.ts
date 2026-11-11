import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Cryptanalysis2025Component } from './2025-cryptanalysis.component';

describe('Cryptanalysis2025Component', () => {
  let component: Cryptanalysis2025Component;
  let fixture: ComponentFixture<Cryptanalysis2025Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cryptanalysis2025Component],
      providers: [provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cryptanalysis2025Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
