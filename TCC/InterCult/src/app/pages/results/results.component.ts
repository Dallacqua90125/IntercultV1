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
      // const matchesTime = time === 'Qualquer duração' || item.time, ;

      return matchesLocation && matchesAgency;
    });
  }

  // Método para verificar o intervalo de preços
  private checkPrice(itemPrice: number, selectedPrice: string): boolean {
    switch (selectedPrice) {
      case 'R$ 1.500 a R$ 5.000':
        return itemPrice >= 1500 && itemPrice <= 5000;
      case 'R$ 5.000 a R$ 15.000':
        return itemPrice > 5000 && itemPrice <= 15000;
      case 'Mais de R$ 15.000':
        return itemPrice > 15000;
      default:
        return true; // Para 'Qualquer preço'
    }
  }
}
