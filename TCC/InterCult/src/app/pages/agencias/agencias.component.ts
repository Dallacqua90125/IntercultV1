import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agencias',
  templateUrl: './agencias.component.html',
  styleUrls: ['./agencias.component.css']
})
export class AgenciasComponent implements OnInit {
  searchText: string = '';
  imgEF: string =  'assets/ef.png';
  imgCI: string =  'assets/ci.png';
  agencias = [
    {
      nome: 'EF',
      paises: '🇯🇵 🇰🇷 🇺🇦 🇺🇸 🇫🇷 🇮🇹 🇪🇸 🇬🇧',
      rating: '★★★★☆',
      avaliacoes: '4.5',
      img: 'assets/ef-logo.png'
    },
    {
      nome: 'CI',
      paises: '🇿🇦 🇺🇸 🇬🇧 🇦🇴',
      rating: '★★★★☆',
      avaliacoes: '4.5',
      img: 'assets/ci - logo.png'
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}