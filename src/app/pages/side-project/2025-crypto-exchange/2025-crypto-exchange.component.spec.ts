import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CryptoExchange2025Component } from './2025-crypto-exchange.component';

describe('CryptoExchange2025Component', () => {
  let component: CryptoExchange2025Component;
  let fixture: ComponentFixture<CryptoExchange2025Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptoExchange2025Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CryptoExchange2025Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
