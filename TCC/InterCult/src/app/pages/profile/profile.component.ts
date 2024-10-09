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

  constructor(private userService: UserService, private router: Router,) {}

  ngOnInit(): void {
    const user = this.userService.getUser(); 
    this.userName = user ? user.name : null;     
    this.userEmail = user ? user.email : null;
  }

  //Seguinte, tamo usando essa função apenas para a tal da prebanca tem q muda pra atualiza no banco
  saveChanges(): void {
    const updatedUser = {
      name: this.userName,
      email: this.userEmail,
    };
    this.userService.updateUser(updatedUser);
    alert('Usuário Alterado com Sucesso');
    this.router.navigate(['/']);
  }
}
