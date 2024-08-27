import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileImgSrc: string = 'https://via.placeholder.com/150';
  userName: string | null = null;
  userEmail: string | null = null;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    const user = this.userService.getUser(); 
    this.userName = user ? user.name : null;     
    this.userEmail = user ? user.email : null;
  }
}
