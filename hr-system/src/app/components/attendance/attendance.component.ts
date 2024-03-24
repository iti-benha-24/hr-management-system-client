import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AttendanceService } from 'src/services/attendance.service';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {
 attendances:any;
 startDate:any;
 endDate:any;
 search:any;
  constructor(private attendService: AttendanceService , private router:Router) {
    
    
  }
 
  ngOnInit(): void {
    this.attendService.getAllAttendance().subscribe({
      next: (response) => {
        this.attendances =response;
      },
      error: (err) => {
        console.log("error");
      }
    });
  }
  getAttendancesByDate(startDate:any, endDate:any)
  {
   this.attendService.filterAttendanceByDate(startDate, endDate).subscribe({
     next:(response)=>{
      this.attendances=response;
     },
     error:(error)=>{
      console.log(error)
     }
   });
  }
  getAttendancesByName(name:any){
    this.attendService.filterAttendanceByName(name).subscribe({
      next:(response)=>{
       this.attendances=response;
       this.search="";
      },
      error:(error)=>{
       console.log(error)
      }
    });
  }
  deleteAttendance(id:number){
    this.attendService.deleteAttendance(id).subscribe({
      next:()=>{
        // this.router.navigate(['/']);
        this.ngOnInit();
      }
    });
  }

}
