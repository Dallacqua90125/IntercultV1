import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../models/Users';
import { UserService } from '../../../services/userService/user.service';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  users: User[] = [];
  allUsers: User[] = [];

  email: string = '';
  password: string = '';

  constructor(private userService: UserService, private router: Router){}

  ngOnInit(): void {
      this.userService.GetUsers().subscribe(response => {
        this.users = response;
        this.allUsers = response;

        console.log(` aloooo ${response}`);
      });
  }

  onSubmit() {
    let funf: boolean = false
    const hashedPassword = CryptoJS.SHA256(this.password).toString(CryptoJS.enc.Base64);
    this.users.forEach(user => {
      if (this.email == user.email && this.password == user.password) {
        alert(`Seja bem vindo ${user.name}`);
        localStorage.setItem('id', user.id.toString());
        funf = true;
        this.router.navigate(['/home']);
      }
    })
    if (!funf) {
      alert("Usuário não encontrado");
      console.log(this.users);
    }
  }
}
