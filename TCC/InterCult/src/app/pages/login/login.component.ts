import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { User } from '../../models/Users';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  imgLogin: string = 'assets/icone.png';

  

  users: User[] = []

  email: string = '';
  password: string = '';

  constructor(private loginService: LoginService, private router: Router) {}

  doLogin() {
    this.loginService.GetUsers().subscribe(data => {
      const dados = data.data;
  
      this.users = dados; 
  
      let userFound = false; 
  
      dados.forEach((item) => {
        if (this.email.toLowerCase === item.email.toLowerCase && this.password === item.password) {
          userFound = true; 
          alert(`Bem vindo ${item.name}`);
          
          this.router.navigate(['/'])
          return; 
        }
      });
  
     
      if (!userFound) {
        alert(`Login inválido`);
      }
    });
  }
  
}
