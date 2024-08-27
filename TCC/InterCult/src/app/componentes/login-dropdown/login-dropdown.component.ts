import { Component, HostListener, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-login-dropdown',
  templateUrl: './login-dropdown.component.html',
  styleUrls: ['./login-dropdown.component.css']
})
export class LoginDropdownComponent implements OnInit {
  userName: string | null = null

  constructor(private userService: UserService){}

  ngOnInit(): void {
    const user = this.userService.getUser(); 
    this.userName = user ? user.name : null;     
    
  }
  
  perfil: string = 'assets/icone.png';
  isOpen = false;



  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  @HostListener('document:click', ['$event'])
  closeDropdown(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('.dropdown')) {
      this.isOpen = false;
    }
  }
}
