import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicHolidayGetAllComponent } from './Components/public-holiday-get-all/public-holiday-get-all.component';
import { PublicHolidayInsertComponent } from './Components/public-holiday-insert/public-holiday-insert.component';

const routes: Routes = [
  { path : "holidays", component : PublicHolidayGetAllComponent},
  { path : "insert" , component : PublicHolidayInsertComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
