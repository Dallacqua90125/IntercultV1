import { Component } from '@angular/core';
import { LoginService } from '../login/login.service';
import { User } from '../../models/Users';
import { SignUpServiceService } from './sign-up-service.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

  
  constructor(private signUpServiceService: SignUpServiceService) {
    
    
  }


  createUser(user: User){
    this.signUpServiceService.CreateFuncionario(user).subscribe((data) => {
      console.log(data)
      alert('Cadastro efetuado com sucesso')
    })
  }
}
