import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  dropbox: string =  'assets/listras.png';
  logo: string =  'assets/pula.png';
<<<<<<< HEAD
  @Input() disableLogo: boolean = false;
=======
  @Input() disableLogin: boolean = false;
>>>>>>> 086efa28adb0c68be2dbbc90491e678bf27032cc
  @Input() disableLogoImg: boolean = true;
}
