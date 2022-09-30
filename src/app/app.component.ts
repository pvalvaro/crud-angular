import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = 'pvalvaro';
  userData ={
    email: 'pvalvaro@hotmail.com',
    role: 'Admin'
  }
  title = 'crud-angular';
}
