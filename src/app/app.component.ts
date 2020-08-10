import { environment } from './../environments/environment.prod';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    firebase.initializeApp(environment.firebaseConfig);
  }
  title = 'news-app';
}
