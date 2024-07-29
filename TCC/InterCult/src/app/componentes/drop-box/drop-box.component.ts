import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-drop-box',
  templateUrl: './drop-box.component.html',
  styleUrl: './drop-box.component.css'
})
export class DropBoxComponent {
  dropbox: string =  'assets/listras.png';
  isOpen = false;
  imgLogin: string = 'assets/icone.png';
  favorite: string = 'assets/favorite.png';
  config: string = 'assets/config.png';
  globo: string = 'assets/globo.png';

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
