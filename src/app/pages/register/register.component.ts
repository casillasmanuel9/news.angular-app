import { MensajesService } from './../../services/mensajes.service';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private alertService: MensajesService
  ) {
    this.registerForm = this.formBuilder.group({
      email: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(/\S+@\S+\.\S+/),
        ]),
      ],
      password: ['', Validators.compose([Validators.required])],
    });
  }

  ngOnInit(): void {}

  async registerEmailPassword() {
    if(this.registerForm.invalid) {
      this.alertService.alertError('Ooops...', 'Formulario Invalido');
      return;
    } else {
      this.loading = true;
      const { email, password } = this.registerForm.value;
      await this.authService.registerWithEmailPassword(email, password);
      this.loading = false;
    }
  }
}
