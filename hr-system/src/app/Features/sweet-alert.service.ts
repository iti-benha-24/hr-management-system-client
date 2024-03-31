import { Injectable } from '@angular/core'; 
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SweetAlertService {
  showAlert(message: string) {
    Swal.fire({
      position: 'center',
      icon: 'warning',
      title: message,
      showConfirmButton: false,
      timer: 3000
    });
  }
}
