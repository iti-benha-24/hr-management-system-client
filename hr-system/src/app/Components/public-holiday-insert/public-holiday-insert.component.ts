import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PublicHolidayService } from 'src/app/Services/public-holiday.service';

@Component({
  selector: 'app-public-holiday-insert',
  templateUrl: './public-holiday-insert.component.html',
  styleUrls: ['./public-holiday-insert.component.css']
})
export class PublicHolidayInsertComponent {

  name : string = '';
  day : any =  new Date().toISOString();
  constructor( private holidayservice : PublicHolidayService , private router : Router){}
  insert(){
    const Holiday = {
     name : this.name ,
     day : this.day
     };
     this.holidayservice.Insert(Holiday).subscribe();
     this.name = '';
     this.day = '' ;
     this.router.navigate(["/holidays"]);
   }
}
