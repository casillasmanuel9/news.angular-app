import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  email: string;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.email = this.authService.getEmail();
  }

  logOut() {
    this.authService.logout();
  }

}
