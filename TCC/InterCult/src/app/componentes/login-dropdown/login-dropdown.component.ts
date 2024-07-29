import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-dropdown',
  templateUrl: './login-dropdown.component.html',
  styleUrls: ['./login-dropdown.component.css']
})
export class LoginDropdownComponent implements OnInit {
  perfil: string = 'assets/icone.png';
  isOpen = false;
  currentUser: string = 'Login';
  loginTxt: string = '';
  
  @HostListener('document:click', ['$event'])
  closeDropdown(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('.dropdown')) {
      this.isOpen = false;
    }
  }

  ngOnInit(): void {
    const storedUserName = localStorage.getItem('currentUserName');
    this.currentUser = storedUserName ? storedUserName : 'Login'; 
    this.updateLoginText();
  }
  
  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  updateLoginText(){
    if (this.currentUser === 'Login') {
      this.loginTxt = 'Sign up';
    } else {
      this.loginTxt = 'Trocar conta';
    }
  }
}
