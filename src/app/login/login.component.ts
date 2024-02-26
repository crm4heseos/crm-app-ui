import { Component } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { HeseosService } from '../heseos.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public username= '';
  public password = '';

  constructor(private router: Router, private service: HeseosService){

  }
  login() {
    const username = this.username;
    const password = this.password;
  
    // Check the username and password against a database or other authentication service.
    let users:any = this.service.getValueByKeyFromLocal('users');
    if(users){
      users = JSON.parse(users);
      users = users?.find((userData:any) => userData.userName === username);
    }
    if (username === 'admin' && password === 'password') {
      // The user is logged in.
      this.service.userRole = 'admin';
      this.router.navigate(['/dashboard']);
    } else if(users && users.userName && users.password === password){
      this.service.userRole = users.userRole;
      this.router.navigate(['/dashboard']);
    }else {
      // The user is not logged in.
      alert('Invalid username or password.');
    }
  }
}
