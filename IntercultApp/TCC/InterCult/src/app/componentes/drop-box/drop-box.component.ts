import { Component, HostListener } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-drop-box',
  templateUrl: './drop-box.component.html',
  styleUrls: ['./drop-box.component.css'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translateX(0)' // Menu visível
      })),
      state('out', style({
        transform: 'translateX(-100%)' // Menu oculto
      })),
      transition('in => out', animate('300ms ease-in-out')),
      transition('out => in', animate('300ms ease-in-out'))
    ])
  ]
})
export class DropBoxComponent {
  dropbox: string = 'assets/listras.png';
  isOpen = false;
  imgLogin: string = 'assets/icone.png';
  favorite: string = 'assets/favorite.png';
  config: string = 'assets/config.png';
  globo: string = 'assets/globo.png';
  document: string = 'assets/document.png';
  gps: string = 'assets/gps.png';
  books: string = 'assets/books.png';
  person: string = 'assets/person.png';

  constructor(private router: Router) {}

  navigateTo(path: string) {
    this.router.navigate([path]);
  }
  
  toggleDropdown() {
    this.isOpen = !this.isOpen;
}


  get stateName() {
    return this.isOpen ? 'in' : 'out';
  }

  @HostListener('document:click', ['$event'])
  closeDropdown(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('.dropdown')) {
      this.isOpen = false;
    }
  }
}
