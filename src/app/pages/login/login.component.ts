import { MensajesService } from './../../services/mensajes.service';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;
  loading = false;

  constructor(private authService: AuthService, private formBuilder: FormBuilder, private alertService: MensajesService) {
    this.loginForm = this.formBuilder.group({
      email: ['manue117@hotmail.es', Validators.compose([
        Validators.required,
        Validators.pattern(/\S+@\S+\.\S+/)
      ])],
      password: ['123qwe', Validators.compose([
        Validators.required
      ])]
    })
  }

  ngOnInit(): void {
  }

  loginWithGoogle = () => this.authService.loginWithGoogle();

  async loginWithEmailPassword () {
    if(this.loginForm.invalid) {
      this.alertService.alertError('Ooops...', 'Formulario Invalido');
      return;
    } else {
      this.loading = true;
      const { email, password } = this.loginForm.value;
      await this.authService.loginWithEmailPassword(email, password);
      this.loading = false;
    }
  }

}
