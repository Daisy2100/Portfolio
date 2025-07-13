import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CryptoExchange2025Component } from './2025-crypto-exchange/2025-crypto-exchange.component';
import { LicensePlate2024Component } from './2024-license-plate/2024-license-plate.component';
import { DatePicker2022Component } from './2022-date-picker/2022-date-picker.component';

@NgModule({
  declarations: [
    LicensePlate2024Component,
    DatePicker2022Component
  ],
  imports: [
    CommonModule,
    RouterModule,
    CryptoExchange2025Component
  ]
})
export class SideProjectModule {}
