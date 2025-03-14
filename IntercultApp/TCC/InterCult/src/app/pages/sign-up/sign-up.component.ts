import { Component } from '@angular/core';
import { User } from '../../../models/Users';
import { UserService } from '../../../services/userService/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  allUsers: User[] = []
  newUser: User = {
    id: 0,
    name: '',
    email: '',
    password : '',
    photo: ''
  }
  imgLogin: string = 'assets/icone.png';
  loading: boolean = false;



  constructor(private userService: UserService, private router: Router) { }


  submit(){
    this.userService.CreateUser(this.newUser).subscribe(
      (novo) => {
        this.allUsers.push(novo);
        this.newUser = {id: 0, name: '', email: '', password: '', photo: ''};
        alert('Usuário cadastrado com sucesso');
      },
      (error) => {
        alert('Erro ao criar usuário');
      }
    )
  }
}

