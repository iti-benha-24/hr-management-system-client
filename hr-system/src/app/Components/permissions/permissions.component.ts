import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SweetAlertService } from 'src/app/Features/sweet-alert.service';
import { PermissionService } from 'src/app/services/permission.service';

@Component({
  selector: 'app-permissions',
  templateUrl: './permissions.component.html',
  styleUrls: ['./permissions.component.css']
})
export class PermissionsComponent implements OnInit{
permissionRoles:any;
  canEdit: boolean = false;
  canDelete: boolean = false;
  canAdd: boolean = false;
  canRead: boolean = false;
constructor(private permissionService:PermissionService,private sweetAlertService :SweetAlertService, private router:Router) {
  
}

navigateToAddPermission() {
  if (this.canAdd) {
    this.router.navigate(['/newrole']);
  } else {
    this.sweetAlertService.showAlert("You don't have permission");
  }
}

navigateToEditPermission(id:number) {
  if (this.canEdit) {
    this.router.navigate(['/editrole',id]);
  } else {
    this.sweetAlertService.showAlert("You don't have permission");
  }
}
  ngOnInit(): void {
    this.permissionService.getAllRoles().subscribe({
      next:(res)=>{
        this.permissionRoles=res;
        console.log(res);
      },
      error:(error)=>{
        console.log(error);
      }
    });

    const userRole = localStorage.getItem('role');
    if (userRole) {
      this.permissionService.getPermissionsForPermissions(userRole).subscribe(
        (permissions) => {
          this.canEdit = permissions[0].canEdit;
          this.canDelete = permissions[0].canDelete;
          this.canAdd = permissions[0].canAdd;
          this.canRead= permissions[0].canRead;
        },
        (error: any) => {
          console.error('Failed to fetch permissions for Employees section:', error);
        }
      );
    } else {
      console.error('User role not found in local storage');
    }
  }
  
  deleteRole(roleId:string){
    if (this.canDelete) {
      this.permissionService.DeleteRoleAndPermissions(roleId).subscribe({
        next:()=>{
          this.ngOnInit();
        },
        error:(err)=>{
          console.log(err);
        }
      });
    } else {
      this.sweetAlertService.showAlert("You don't have permission");
    }
  }



}
