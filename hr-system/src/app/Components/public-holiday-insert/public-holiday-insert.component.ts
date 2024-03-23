import { Component } from '@angular/core';
import { PublicHolidayService } from 'src/app/Services/public-holiday.service';

@Component({
  selector: 'app-public-holiday-insert',
  templateUrl: './public-holiday-insert.component.html',
  styleUrls: ['./public-holiday-insert.component.css']
})
export class PublicHolidayInsertComponent {

  name : string = '';
  day : any =  new Date().toISOString();
  constructor( private holidayservice : PublicHolidayService){}
  insert(){
    const Holiday = {
     name : this.name ,
     day : this.day
     };
     this.holidayservice.Insert(Holiday).subscribe();
     
   }
}
