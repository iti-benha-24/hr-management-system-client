import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SweetAlertService } from 'src/app/Features/sweet-alert.service';
import { PermissionService } from 'src/app/services/permission.service';
import { LoginService } from 'src/services/login.service';
import { PublicHolidayService } from 'src/services/public-holiday.service';

@Component({
  selector: 'app-public-holiday-get-all',
  templateUrl: './public-holiday-get-all.component.html',
  styleUrls: ['./public-holiday-get-all.component.css']
})
export class PublicHolidayGetAllComponent implements OnInit {
  
  holidays : any [] = [] ;
  canEdit: boolean = false;
  canDelete: boolean = false;
  canAdd: boolean = false;
  canRead :boolean = false;
  constructor( private holidayservice : PublicHolidayService ,private sweetAlertService:SweetAlertService, private loginService:LoginService ,private permissionService:PermissionService, private router : Router ){}


  navigateToAddHoliday() {
    if (this.canAdd) {
      this.router.navigate(['/insert']);
    } else {
      this.sweetAlertService.showAlert("You don't have permission");
    }
  }
  
  navigateToEditPermission(id:number) {
    if (this.canEdit) {
      this.router.navigate(['/editholiday',id]);
    } else {
      this.sweetAlertService.showAlert("You don't have permission");
    }
  }


  ngOnInit(): void {
    this.getAllHolidays();
    const userRole = localStorage.getItem('role');
    if (userRole) {
      this.permissionService.getHolidayPermissions(userRole).subscribe(
        (permissions) => {
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

  getAllHolidays (){
    this.holidayservice.GetAll().subscribe( (h) => this.holidays = h  ) ;
  }


  delete(id : number){

    if (this.canDelete) {
      this.holidayservice.Delete(id).subscribe( (o) => { this.getAllHolidays(); }) ;

    } else {
      this.sweetAlertService.showAlert("You don't have permission");
    }
    
  }

  
  
}
