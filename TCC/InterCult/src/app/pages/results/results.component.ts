import { Component } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrl: './results.component.css'
})
export class ResultsComponent {
  resultado = [
    { nome: 'Curso de Inglês Geral', agencia:'EF', preco: 5350.00, pais: 'Nova Zelândia', cidade: 'Auckland', avaliacao: 4.4 },
    { nome: 'Curso de Francês Intensivo',agencia:'EF', preco: 2555.00, pais: 'França', cidade: 'Paris', avaliacao: 4.7 },
    { nome: 'High School', agencia:'CI', preco: 36000.00, pais: 'EUA', cidade: 'Los Angeles, Califórnia', avaliacao: 4.9 },
    { nome: 'Curso de Idiomas na Austrália', agencia:'CI', preco: 6800.00, pais: 'Austrália', cidade: 'Sydney', avaliacao: 4.9 }
  ];

  tipos: string[] = ['Curso de Idioma', 'Teen', 'High School', 'Trabalhar e Estudar Idioma'];

  // Definindo os países disponíveis para filtro
  paises: string[] = ['Canadá', 'Espanha', 'Estados Unidos', 'Inglaterra', 'Nova Zelândia'];

  // O que está incluso no curso
  opcoes: string[] = ['Acomodações', 'Casa de família', 'Residência Estudantil'];

  filtros = {
    tipo: [],
    pais: [],
    incluso: [],
    avaliacaoMin: 0
  };


}
