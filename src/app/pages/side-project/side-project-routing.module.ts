import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CryptoExchange2025Component } from './2025-crypto-exchange/2025-crypto-exchange.component';
import { LicensePlate2024Component } from './2024-license-plate/2024-license-plate.component';
import { DatePicker2022Component } from './2022-date-picker/2022-date-picker.component';

const routes: Routes = [
  { path: '2025-crypto-exchange', component: CryptoExchange2025Component },
  { path: '2024-license-plate', component: LicensePlate2024Component },
  { path: '2022-date-picker', component: DatePicker2022Component },
  { path: '', redirectTo: '2025-crypto-exchange', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SideProjectRoutingModule {}
