import { Component } from '@angular/core';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.css']
})



export class DocumentationComponent {
  // Object to store the state of each section
  sections: { [key: string]: boolean } = {
    passaporte: false,
    intercambio: false,
    vistos: false
  };

  toggleSection(section: string): void {
    this.sections[section] = !this.sections[section]; // Acesso com notação de colchetes
  }
  imgpassaporte: string =  'assets/passaporte-brasileiro.jpg';
  isSectionOpen(section: string): boolean {
    return this.sections[section]; // Acesso com notação de colchetes
  }
}
