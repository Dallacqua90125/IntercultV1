import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileImgSrc: string = 'https://via.placeholder.com/150';
  userName: string | null = null;
  userEmail: string | null = null;
  userId: number | null = null; // Adicionando userId para identificar o usuário
  userPassword: string | null = null; // Se a senha for necessária
  userPhoto: number | null = null; // Caso você esteja usando um ID para a foto

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    const user = this.userService.getUser();
    this.userName = user ? user.name : null;
    this.userEmail = user ? user.email : null;
    this.userId = user ? user.id : null;
    this.userPassword = user ? user.password : null;
    this.userPhoto = user ? user.photo : 0; 
  }

  saveChanges(): void {
    if (this.userId) {
      const updatedUser = {
        id: this.userId,           // Inclua o ID, se necessário
        name: this.userName,
        email: this.userEmail,
        password: this.userPassword, // Inclua a senha, se necessário
        photo: this.userPhoto || 0   // Inclua a foto, se necessário
      };

      console.log('Updated User Data:', updatedUser); // Para verificar os dados

      this.userService.updateUser(this.userId, updatedUser).subscribe({
        next: (response) => {
          alert("Alteração efetuada")
          // Atualize o usuário no BehaviorSubject ou redirecione o usuário
          this.userService.setUser({ ...this.userService.getUser(), ...updatedUser });
        },
        error: (error) => {
          alert("Erro na alteração")
          console.error('Error updating user', error);
          // Trate o erro como necessário, talvez mostrando uma mensagem ao usuário
        }
      });
    }
  }
}
