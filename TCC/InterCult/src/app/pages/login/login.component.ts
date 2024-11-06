import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { UserService } from '../../services/user/user.service';  

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  imgLogin: string = 'assets/icone.png';
  email: string = '';
  password: string = '';
  loading: boolean = false; // Adicionando a variável para controle de estado de carregamento

  constructor(
    private loginService: LoginService, 
    private router: Router,
    private userService: UserService  
  ) {}

  doLogin() {
    this.loading = true; // Ativa o estado de carregamento

    // Faz a chamada de login
    this.loginService.GetUsers().subscribe(data => {
      const dados = data.data;
      let userFound = false;

      dados.forEach((item) => {
        // Verifica as credenciais do usuário
        if (this.email.toLowerCase() === item.email.toLowerCase() && this.password === item.password) {
          userFound = true;
          alert(`Bem-vindo ${item.name}`);

          // Armazena os dados do usuário
          this.userService.setUser(item);

          // Navega para a página inicial
          this.router.navigate(['/']);
          return;
        }
      });

      if (!userFound) {
        alert(`Login inválido`);
      }

      // Após a verificação, desativa o estado de carregamento
      this.loading = false;
    }, error => {
      // Se houver erro na requisição, desativa o estado de carregamento
      this.loading = false;
      alert('Ocorreu um erro ao realizar o login. Tente novamente.');
    });
  }
}
