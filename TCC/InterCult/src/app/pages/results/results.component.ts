import { Component } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrl: './results.component.css'
})
export class ResultsComponent {
  cursos = [
    { titulo: 'Programa/Curso', preco: 6399.00, pais: 'Nova Zelândia', cidade: 'Cidade', avaliacao: 4.9 },
    { titulo: 'Programa/Curso', preco: 6399.00, pais: 'Nova Zelândia', cidade: 'Cidade', avaliacao: 4.9 },
    { titulo: 'Programa/Curso', preco: 6399.00, pais: 'Nova Zelândia', cidade: 'Cidade', avaliacao: 4.9 },
    { titulo: 'Programa/Curso', preco: 6399.00, pais: 'Nova Zelândia', cidade: 'Cidade', avaliacao: 4.9 }
  ];

}
