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
      nome: 'Agência 1',
      paises: '🇯🇵 🇰🇷 🇺🇦 🇺🇸 🇫🇷 🇮🇹 🇪🇸 🇬🇧',
      rating: '★★★★☆',
      avaliacoes: '4.5'
    },
    {
      nome: 'Agência 2',
      paises: '🇿🇦 🇺🇸 🇬🇧 🇦🇴',
      rating: '★★★★☆',
      avaliacoes: '4.5'
    },
    {
      nome: 'Agência 3',
      paises: '🇧🇷 🇨🇦 🇦🇷 🇫🇷 🇩🇪',
      rating: '★★★★☆',
      avaliacoes: '4.5'
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
