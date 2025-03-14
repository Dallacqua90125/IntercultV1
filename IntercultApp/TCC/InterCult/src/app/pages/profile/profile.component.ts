import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../models/Users';
import { UserService } from '../../../services/userService/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  nome: string = '';
  email: string = '';
  telefone: string = '';
  senha: string = '';
  isLoading: boolean = false;

  userId: number | null = null;
  userName: string | null = null;
  userEmail: string | null = null;
  userPassword: string | null = null;
  userPhoto: string | null = null;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    const userId = localStorage.getItem('id');
    if (userId) {
      const parsedUserId = Number(userId);
      if (!isNaN(parsedUserId)) {
        this.userId = parsedUserId;
        this.userService.GetUserById(this.userId).subscribe(
          (user) => {
            this.userName = user.name;
            this.userEmail = user.email;
            this.userPassword = user.password;
            this.userPhoto = user.photo ?? null;
          },
          (error) => {
            alert("Erro ao carregar os dados do usuário.");
          }
        );
      }
    }
  }

  saveChanges(): void {
    if (!this.userName || !this.userEmail || !this.userPassword) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    this.isLoading = true;

    if (this.userId !== null) {
      const updatedUser: User = {
        id: this.userId,
        name: this.userName,
        email: this.userEmail,
        password: this.userPassword,
        photo: this.userPhoto
      };

      this.userService.UpdateUser(updatedUser).subscribe(
        (response) => {
          alert("Perfil atualizado com sucesso!");
          this.isLoading = false;
          this.router.navigate(['/profile']);
        },
        (error) => {
          alert("Erro ao atualizar o perfil. Tente novamente.");
          this.isLoading = false;
        }
      );
    }
  }
}
