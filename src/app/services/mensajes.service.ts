import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class MensajesService {

  constructor() { }

  alertError(title : string, text: string) {
    Swal.fire({
      icon: 'error',
      title,
      text,
    });
  }
}
