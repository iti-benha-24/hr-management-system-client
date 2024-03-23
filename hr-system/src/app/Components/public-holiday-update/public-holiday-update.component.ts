import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PublicHolidayService } from 'src/app/Services/public-holiday.service';

@Component({
  selector: 'app-public-holiday-update',
  templateUrl: './public-holiday-update.component.html',
  styleUrls: ['./public-holiday-update.component.css']
})
export class PublicHolidayUpdateComponent implements OnInit{
  name : string = '';
  day : any = new Date().toISOString();
  id : number = 0 ;
  
  constructor( private hservice : PublicHolidayService , private router : Router ) {
  }
  ngOnInit(): void {
    this.name = this.hservice.getData()[0];
    this.day = this.hservice.getData()[1];
    this.id = this.hservice.getData()[2] ;
  }
  update() {
    const holidayData = {
      name : this.name ,
      day : this.day ,
      id : this.id 
    }
    this.hservice.Update(holidayData , this.id ).subscribe( (o) => {this.router.navigateByUrl('/holidays')});
  }
}
