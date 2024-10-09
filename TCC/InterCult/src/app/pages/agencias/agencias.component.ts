import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agencias',
  templateUrl: './agencias.component.html',
  styleUrls: ['./agencias.component.css']
})
export class AgenciasComponent implements OnInit {
  searchText: string = '';
  agencias = [
    {
      nome: 'EF',
      paises: '🇯🇵 🇰🇷 🇺🇦 🇺🇸 🇫🇷 🇮🇹 🇪🇸 🇬🇧',
      rating: '★★★★☆',
      avaliacoes: '4.5',
      img: 'assets/ef-logo.png',
      link: 'https://www.ef.com.br'  // Link para a agência EF
    },
    {
      nome: 'CI',
      paises: '🇿🇦 🇺🇸 🇬🇧 🇦🇴',
      rating: '★★★★☆',
      avaliacoes: '4.5',
      img: 'assets/ci - logo.png',
      link: 'https://www.ci.com.br/pt-br/home'  // Link para a agência CI
    }
  ];

  constructor() {}

  ngOnInit(): void {}

  navigateTo(nome: string): void {
    const agencia = this.agencias.find(agencia => agencia.nome === nome);
    if (agencia && agencia.link) {
      window.open(agencia.link, '_blank'); // Abre o link em uma nova aba
    }
  }
}
