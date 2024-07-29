import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  dropbox: string =  'assets/listras.png';
  logo: string =  'assets/pula.png';
  @Input() disableDropdowns: boolean = false;
  @Input() disableLogo: boolean = false;
  @Input() disableLogoImg: boolean = false;
}
