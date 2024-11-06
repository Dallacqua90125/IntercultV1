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
  resultadoFiltrado: Content[] = []; // Armazena os resultados filtrados
  filtros: any = {};

  // Propriedades adicionais para filtros de idioma e checkbox
  idiomas: string[] = ['Inglês', 'Espanhol', 'Francês', 'Italiano'];
  paises: string[] = ['Italia', 'Franca', 'Canada'];
  opcoes: string[] = ['Opção 1', 'Opção 2', 'Opção 3'];

  // Lista para armazenar a seleção de idioma (um só por vez)
  selectedIdioma: string = ''; // Usando uma string para manter apenas uma seleção por vez

  constructor(private contentService: ContentService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    // Captura os parâmetros da rota para os filtros iniciais
    this.route.queryParams.subscribe(params => {
      this.filtros = {
        location: params['location'],
        agency: params['agency'],
        type: params['type']
      };
      this.fetchResults();
    });
  }

  fetchResults() {
    // Busca o conteúdo e aplica os filtros de barra de busca inicialmente
    this.selectedIdioma = '';  // Limpa a seleção do idioma
    this.contentService.GetContent().subscribe(response => {
      this.resultado = response.data;
      this.resultadoFiltrado = [...this.resultado]; // Mantém a lista inicial para aplicar os filtros de checkbox

      this.applySearchFilters();  // Filtra com base nos parâmetros iniciais
    });
  }

  // Método para aplicar filtros da barra de busca
  applySearchFilters() {
    const { location, agency, type } = this.filtros;
    this.resultadoFiltrado = this.resultado.filter(item => {
      const matchesLocation = !location || location === 'Todos' || item.country === location;
      const matchesAgency = !agency || agency === 'Todas' || item.agency === agency;
      const matchesType = !type || type === 'Qualquer tipo' || item.type === type;

      return matchesLocation && matchesAgency && matchesType;
    });

    // Atualiza os países após o filtro da busca
    this.paises = [...new Set(this.resultadoFiltrado.map(item => item.country))]; // Extraí os países filtrados
  }

  // Aplica o filtro de idioma nos resultados já filtrados pela barra de busca
  applyCheckboxFilters() {
    const filteredByLocation = this.resultadoFiltrado.filter(item => {
      // Filtra com base nos países que foram selecionados na busca
      return this.paises.includes(item.country);
    });

    if (!this.selectedIdioma) {
      this.resultadoFiltrado = filteredByLocation;  // Se não houver idioma selecionado, mostra todos os resultados
    } else {
      this.resultadoFiltrado = filteredByLocation.filter(item => {
        return item.price === this.selectedIdioma;  // Altere conforme o campo de idioma
      });
    }
  }

  // Atualiza a seleção ao clicar em um idioma
  onIdiomaChange(idioma: string) {
    this.selectedIdioma = idioma;  // Atualiza a seleção com o novo idioma
  }

  // Evento para o botão de aplicar filtros
  onApplyCheckboxFilters() {
    this.applySearchFilters();
    this.applyCheckboxFilters();  // Aplica o filtro de idioma nos resultados já filtrados pela barra de busca
  }

  // Evento que atualiza os filtros da barra de busca e aplica novamente
  applyFilters(filtros: any) {
    this.filtros = filtros;
    this.applySearchFilters();
    this.applyCheckboxFilters(); // Mantém os filtros de checkbox
  }
}
