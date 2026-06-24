import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Primeleft2026Component } from './2026-primeleft/2026-primeleft.component';
import { LicensePlate2024Component } from './2024-license-plate/2024-license-plate.component';
import { DatePicker2022Component } from './2022-date-picker/2022-date-picker.component';

const routes: Routes = [
  { path: '2026-primeleft', component: Primeleft2026Component },
  { path: '2024-license-plate', component: LicensePlate2024Component },
  { path: '2022-date-picker', component: DatePicker2022Component },
  { path: '', redirectTo: '2026-primeleft', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SideProjectRoutingModule {}
