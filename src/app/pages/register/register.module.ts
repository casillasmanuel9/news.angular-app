import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: RegisterComponent }]),
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule
  ],
  declarations: [RegisterComponent]
})
export class RegisterModule { }
