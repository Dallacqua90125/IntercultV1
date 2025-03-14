import { Component, Input, input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  constructor(private router: Router) {}

  dropbox: string =  'assets/listras.png';
  logo: string =  'assets/pula.png';
  @Input() disableLogo: boolean = false;
  @Input() disableLogoImg: boolean = true;

  
  
}


