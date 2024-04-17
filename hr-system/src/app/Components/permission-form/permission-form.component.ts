import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PermissionService } from 'src/app/services/permission.service';
interface RolePermission {
  // id: number;
   roleId: string;
   role: string | null;
  section: string;
  canRead: boolean;
  canAdd: boolean;
  canEdit: boolean;
  canDelete: boolean;
}

interface Role {
  id: string;
  name: string;
  normalizedName: string;
  concurrencyStamp: string;
  rolePermissions: RolePermission[];
}

@Component({
  selector: 'app-permission-form',
  templateUrl: './permission-form.component.html',
  styleUrls: ['./permission-form.component.css']
})
export class PermissionFormComponent implements OnInit{

  roleForm: FormGroup;
  canEditEmployee: boolean = false;
  canDeleteEmployee: boolean = false;
  canAddEmployee: boolean = false;
  canReadEmployee: boolean = false;
  permissions: RolePermission[] = [
    { roleId:'0hdjh',role:null,section: 'Employees', canRead: false, canAdd: false, canEdit: false, canDelete: false },
    { roleId:'0hjds',role:null,section: 'Salaries', canRead: false, canAdd: false, canEdit: false, canDelete: false },
    { roleId:'0ddds',role:null,section: 'Attendances', canRead: false, canAdd: false, canEdit: false, canDelete: false },
    { roleId:'0eeds',role:null,section: 'Holidays', canRead: false, canAdd: false, canEdit: false, canDelete: false },
    { roleId:'0dsds',role:null,section: 'Permissions', canRead: false, canAdd: false, canEdit: false, canDelete: false }
    
  ];
roleId:string;
  constructor(private formBuilder: FormBuilder,private permissionService:PermissionService, private router: Router,private active:ActivatedRoute) {
    this.roleId= this.active.snapshot.paramMap.get('id') || '';
    this.roleForm = this.formBuilder.group({
      name: '',
      permissions: this.formBuilder.array([])
    });
    this.addPermissionControls();
  }
  
  ngOnInit(): void {
    if(this.roleId != ''){
      this.permissionService.getRoleById(this.roleId).subscribe({
        next:(res)=>{
        console.log(res);
        this.roleForm.patchValue(res);
        },
        error:(error)=>{
        console.log(error);
        }
      });
    }

    const userRole = localStorage.getItem('role');
    if (userRole) {
      this.permissionService.getEmployeePermissions(userRole).subscribe(
        (permissions) => {
          console.log(permissions);
          this.canEditEmployee = permissions[0].canEdit;
          this.canDeleteEmployee = permissions[0].canDelete;
          this.canAddEmployee = permissions[0].canAdd;
          this.canReadEmployee = permissions[0].canRead;
        },
        (error: any) => {
          console.error('Failed to fetch permissions for Employees section:', error);
        }
      );
    } else {
      console.error('User role not found in local storage');
    }

  }
  get permissionsControls() {
    return (this.roleForm.get('permissions') as FormArray)?.controls;
  }
  addPermissionControls() {
    const rolePermissionsArray = this.roleForm.get('permissions') as FormArray;
    this.permissions.forEach(permission => {
      const permissionGroup = this.formBuilder.group({
         roleId: permission.roleId,
         role: permission.role,
        section: permission.section,
        canRead: permission.canRead,
        canAdd: permission.canAdd,
        canEdit: permission.canEdit,
        canDelete: permission.canDelete
      });
      rolePermissionsArray.push(permissionGroup);
    });
  }

  onSubmit() {
    console.log(this.roleForm.value);
    
    if(this.roleId == ''){
      this.permissionService.AddRoleAndPermissions(this.roleForm.value).subscribe({
        next:(res)=>{
          console.log(this.roleForm.value);
          this.router.navigate(['/permissions']);
        },
        error:(error)=>{
          console.log(this.roleForm.value);
          console.log(error);
        }
         });
    }else{
      this.permissionService.EditRoleAndPermissions(this.roleId,this.roleForm.value).subscribe({
       next:()=>{
        console.log(this.roleForm.value);
         this.router.navigate(['/permissions']);
       },
       error:(error)=>{
        console.log(error);
       }
      })
    }
  }
}
