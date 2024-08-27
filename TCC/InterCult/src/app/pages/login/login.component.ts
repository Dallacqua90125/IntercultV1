import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { UserService } from '../../services/user/user.service';  

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  imgLogin: string = 'assets/icone.png';
  email: string = '';
  password: string = '';

  constructor(
    private loginService: LoginService, 
    private router: Router,
    private userService: UserService  
  ) {}

  doLogin() {
    this.loginService.GetUsers().subscribe(data => {
      const dados = data.data;
      let userFound = false;

      dados.forEach((item) => {
        if (this.email.toLowerCase() === item.email.toLowerCase() && this.password === item.password) {
          userFound = true;
          alert(`Bem vindo ${item.name}`);

         
          this.userService.setUser(item);

          let user = item.name
          let email = item.email
          
          this.router.navigate(['/']);
          return;
        }
      });

      if (!userFound) {
        alert(`Login inválido`);
      }
    });
  }
}
