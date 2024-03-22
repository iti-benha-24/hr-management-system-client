import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicHolidayGetAllComponent } from './Components/public-holiday-get-all/public-holiday-get-all.component';
import { PublicHolidayUpdateComponent } from './Components/public-holiday-update/public-holiday-update.component';
import { PublicHolidayInsertComponent } from './Components/public-holiday-insert/public-holiday-insert.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PublicHolidayGetAllComponent,
    PublicHolidayUpdateComponent,
    PublicHolidayInsertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule ,
    FormsModule ,
    ReactiveFormsModule ,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
