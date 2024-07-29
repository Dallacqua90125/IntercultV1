import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'] 
})
export class ProfileComponent {
  logo: string = 'assets/intercultlogo.png';
  imgLogin: string = 'assets/fotinho.png';
  

  user = {
    email: '',
    name: '',
    name1:'',
    password1: '',
    password2: ''
  };
  
  constructor(private router: Router) {
    this.loadCurrentUser();
  }

  loadCurrentUser() {
    const currentUserName = localStorage.getItem('currentUserName');
    const usersJson = localStorage.getItem('users');
    if (currentUserName && usersJson) {
      const users: any[] = JSON.parse(usersJson);
      const currentUser = users.find((user: any) => user.name === currentUserName);
      if (currentUser) {
        this.user = { ...currentUser }; 
      }
    }
  }

  onUpdate() {
    if (this.user.password1 !== this.user.password2) {
        alert('As senhas não coincidem');
        return;
    }

    const usersJson = localStorage.getItem('users');
    if (usersJson) {
        const users: any[] = JSON.parse(usersJson);
        const currentUserIndex = users.findIndex((user: any) => user.name === this.user.name);
        if (currentUserIndex !== -1) {
            users[currentUserIndex] = this.user;
            localStorage.setItem('users', JSON.stringify(users));
            alert('Usuário atualizado');
            this.user.name = this.user.name1; 
            this.router.navigate(['/']);
        }
    }
}
}
