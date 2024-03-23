import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicHolidayGetAllComponent } from './Components/public-holiday-get-all/public-holiday-get-all.component';
import { PublicHolidayInsertComponent } from './Components/public-holiday-insert/public-holiday-insert.component';
import { PublicHolidayUpdateComponent } from './Components/public-holiday-update/public-holiday-update.component';

const routes: Routes = [
  { path : "holidays", component : PublicHolidayGetAllComponent },
  { path : "insert" , component : PublicHolidayInsertComponent  },
  { path : 'update' , component : PublicHolidayUpdateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
