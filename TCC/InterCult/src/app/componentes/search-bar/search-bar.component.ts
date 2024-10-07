import { Component } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {

  locais: string[] = ['Todos','EUA', 'Itália', 'França', 'Irlanda', 'Austrália'];

  agencias: string[] = ['Todas','EF', 'CI'];

  precos: string[] = ['Qualquer preço','R$ 1.500 a R$ 5.000','R$ 5.000 a R$ 15.000', 'Mais de R$ 15.000'];

}
