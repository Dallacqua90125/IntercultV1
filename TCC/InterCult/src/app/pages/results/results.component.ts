import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContentService } from '../../services/content/content.service';
import { Content } from '../../models/Content';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  resultado: Content[] = [];
  filtros: any = {};

  // Propriedades adicionais
  tipos: string[] = ['Tipo 1', 'Tipo 2', 'Tipo 3']; // Exemplos de tipos
  paises: string[] = ['Italia', 'Franca', 'Canada']; // Exemplos de países
  opcoes: string[] = ['Opção 1', 'Opção 2', 'Opção 3']; // Exemplos de opções

  constructor(private contentService: ContentService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    // Capturando parâmetros da rota
    this.route.queryParams.subscribe(params => {
      this.filtros = {
        location: params['location'],
        agency: params['agency'],
        time: params['time']
      };
      this.fetchResults();
    });
  }

  fetchResults() {
    this.contentService.GetContent().subscribe(response => {
      this.resultado = response.data; // Ajuste de acordo com sua resposta
      this.filterResults(); // Aplica os filtros após buscar os resultados
    });
  }

  // Método para aplicar filtros
  applyFilters(filtros: any) {
    // Atualizar os filtros com o que foi passado no evento
    this.filtros = filtros;
    this.filterResults();
  }
  filterResults() {
    const { location, agency, time } = this.filtros;
    this.resultado = this.resultado.filter(item => {
      const matchesLocation = location === 'Todos' || item.country === location; // Ajuste para seu modelo de dados
      const matchesAgency = agency === 'Todas' || item.agency === agency;
      let matchesTime = true;
      if (time !== 'Qualquer duração') {
        const selectedWeeks = parseInt(time.split(' ')[0], 10); // Extrai o número de semanas do filtro
        const itemTime = parseInt(item.time, 10); // Converte item.time para número, se necessário
        matchesTime = itemTime === selectedWeeks; // Verifica se a duração do item corresponde
      } ;

      return matchesLocation && matchesAgency && matchesTime;
    });
  }

}
