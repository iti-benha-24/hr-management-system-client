import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PublicHolidayService } from 'src/app/Services/public-holiday.service';

@Component({
  selector: 'app-public-holiday-update',
  templateUrl: './public-holiday-update.component.html',
  styleUrls: ['./public-holiday-update.component.css']
})
export class PublicHolidayUpdateComponent implements OnInit {
  name : string = '';
  day : any = new Date().toISOString();
  id : number = 0 ;
  constructor(private router: ActivatedRoute  , private r : Router, private holidayservice :PublicHolidayService) { }
  ngOnInit(): void {
    this.router.queryParams.subscribe((p) => { this.name = p['name']; this.day = p['day']; this.id = p['id'] })
  }

  update( ) {

    const Holiday = {
      name : this.name ,
      day : this.day ,
      id : this.id
      };
      this.holidayservice.Update(Holiday , this.id ).subscribe( (o) => {this.r.navigate(["/holidays"]);} );
     
      
      
  }
}
