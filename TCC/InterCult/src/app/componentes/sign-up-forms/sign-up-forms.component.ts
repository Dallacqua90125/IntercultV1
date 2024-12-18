import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../models/Users';
import { LoginService } from '../../pages/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-forms',
  templateUrl: './sign-up-forms.component.html',
  styleUrls: ['./sign-up-forms.component.css']
})
export class SignUpFormsComponent implements OnInit {

  imgLogin: string = 'assets/icone.png';
  loading: boolean = false; // Variável para controlar o estado de carregamento

  @Output() onSubmit = new EventEmitter<User>();
  userForm!: FormGroup;

  ngOnInit(): void {
    this.userForm = new FormGroup({
      id: new FormControl(0),
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password1: new FormControl('', Validators.required),
      password2: new FormControl('', Validators.required),
      photo: new FormControl(0)
    });
  }

  constructor(private loginService: LoginService, private router: Router) { }

  submit() {
    this.loading = true; // Ativa o estado de carregamento

    let userFound = false;
    
    this.loginService.GetUsers().subscribe(data => {
      const dados = data.data;

      dados.forEach((item) => {
        if (this.userForm.get('email')?.value == item.email) {
          userFound = true;
          alert('Conta já cadastrada');
          this.loading = false; // Desativa o carregamento
          return;
        }
      });

      if (!userFound) {
        if (this.userForm.valid) {
          const password1 = this.userForm.get('password1')?.value;
          const password2 = this.userForm.get('password2')?.value;

          if (password1 !== password2) {
            alert('As senhas estão diferentes');
            this.loading = false; // Desativa o carregamento
            return;
          }

          const userToSend: User = {
            id: this.userForm.get('id')?.value,
            name: this.userForm.get('name')?.value,
            email: this.userForm.get('email')?.value,
            password: password1,
            photo: this.userForm.get('photo')?.value
          };

          this.router.navigate(['/login']);
          console.log(userToSend);
          this.onSubmit.emit(userToSend);
          this.loading = false; // Desativa o carregamento
        } else {
          alert('Por favor, preencha todos os campos corretamente.');
          this.loading = false; // Desativa o carregamento
        }
      }
    }, error => {
      this.loading = false; // Desativa o carregamento em caso de erro
      alert('Ocorreu um erro ao realizar o cadastro. Tente novamente.');
    });
  }
}
