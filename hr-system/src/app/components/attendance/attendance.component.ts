import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { SweetAlertService } from 'src/app/Features/sweet-alert.service';
import { PermissionService } from 'src/app/services/permission.service';
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
 canEdit: boolean = false;
 canDelete: boolean = false;
 canAdd: boolean = false;
 canRead: boolean = false;
 
  constructor(private attendService: AttendanceService ,private sweetAlertService:SweetAlertService,private permissionService:PermissionService , private router:Router) { }
  navigateToAddAttendance() {
    if (this.canAdd) {
      this.router.navigate(['/add']);
    } else {
      this.sweetAlertService.showAlert("You don't have permission");
    }
  }

  navigateToEditAttendance(id:number) {
    if (this.canEdit) {
      this.router.navigate(['/edit',id]);
    } else {
      this.sweetAlertService.showAlert("You don't have permission");
    }
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

    const userRole = localStorage.getItem('role');
if (userRole) {
  this.permissionService.getAttendancePermissions(userRole).subscribe(
    (permissions) => {
      console.log(permissions);
      this.canEdit = permissions[0].canEdit;
      this.canDelete = permissions[0].canDelete;
      this.canAdd = permissions[0].canAdd;
      this.canRead = permissions[0].canRead;
      
    },
    (error: any) => {
      console.error('Failed to fetch permissions for Employees section:', error);
    }
  );
} else {
  console.error('User role not found in local storage');
  
}

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
    if (this.canDelete) {
      this.attendService.deleteAttendance(id).subscribe({
        next:()=>{
          this.ngOnInit();
        }
      });
    } else {
      this.sweetAlertService.showAlert("You don't have permission");
    }
  }

}
