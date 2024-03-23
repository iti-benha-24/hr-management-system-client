import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PublicHolidayService } from 'src/app/Services/public-holiday.service';

@Component({
  selector: 'app-public-holiday-get-all',
  templateUrl: './public-holiday-get-all.component.html',
  styleUrls: ['./public-holiday-get-all.component.css']
})
export class PublicHolidayGetAllComponent implements OnInit {
  
  holidays : any [] = [] ;
  
  constructor( private holidayservice : PublicHolidayService , private router : Router ){}

  ngOnInit(): void {
    this.getAllHolidays();
  }

  getAllHolidays (){
    this.holidayservice.GetAll().subscribe( (h) => this.holidays = h  ) ;
  }


  delete(id : number){
    this.holidayservice.Delete(id).subscribe( (o) => { this.getAllHolidays(); }) ;
  }

  update( name : any , day : string  , id : number ){
    this.holidayservice.setData( name , day , id  );
    this.router.navigateByUrl('/update');
  }
  
}
