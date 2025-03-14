// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { ContentService } from '../../services/content/content.service';
// import { Content } from '../../models/Content';

// @Component({
//   selector: 'app-results',
//   templateUrl: './results.component.html',
//   styleUrls: ['./results.component.css']
// })
// export class ResultsComponent implements OnInit {
//   resultado: Content[] = [];
//   resultadoFiltrado: Content[] = []; // Armazena os resultados filtrados
//   filtros: any = {};

//   idiomas: string[] = ['Inglês', 'Espanhol', 'Francês', 'Italiano'];
//   paises: string[] = ['Italia', 'Franca', 'Canada'];
//   opcoes: string[] = ['Opção 1', 'Opção 2', 'Opção 3'];
//   times: string[] = ['Qualquer duração', '1 a 4 semanas', '8 semanas', '20 a 30 semanas', 'Mais semanas'];

//   selectedIdioma: string = '';
//   selectedTime: string = 'Qualquer duração';

//   constructor(private contentService: ContentService, private router: Router, private route: ActivatedRoute) {}

//   ngOnInit() {
//     this.route.queryParams.subscribe(params => {
//       this.filtros = {
//         location: params['location'],
//         agency: params['agency'],
//         type: params['type']
//       };
//       this.fetchResults();
//     });
//   }

//   fetchResults() {
//     this.selectedIdioma = '';
//     this.contentService.GetContent().subscribe(response => {
//       this.resultado = response.data;
//       this.resultadoFiltrado = [...this.resultado];
//       this.applySearchFilters();
//     });
//   }

//   applySearchFilters() {
//     const { location, agency, type } = this.filtros;
//     this.resultadoFiltrado = this.resultado.filter(item => {
//       const matchesLocation = !location || location === 'Todos' || item.country === location;
//       const matchesAgency = !agency || agency === 'Todas' || item.agency === agency;
//       const matchesType = !type || type === 'Qualquer tipo' || item.type === type;

//       return matchesLocation && matchesAgency && matchesType;
//     });

//     this.paises = [...new Set(this.resultadoFiltrado.map(item => item.country))];
//   }

//   applyCheckboxFilters() {
//     let filteredResults = [...this.resultadoFiltrado];

//     if (this.selectedIdioma) {
//       filteredResults = filteredResults.filter(item => item.price === this.selectedIdioma);
//     }

//     if (this.selectedTime && this.selectedTime !== 'Qualquer duração') {
//       filteredResults = filteredResults.filter(item => {
//         const itemTime = parseInt(item.time, 10);

//         if (isNaN(itemTime)) return false;

//         switch (this.selectedTime) {
//           case '1 a 4 semanas':
//             return itemTime >= 1 && itemTime <= 4;
//           case '8 semanas':
//             return itemTime === 8;
//           case '20 a 30 semanas':
//             return itemTime >= 20 && itemTime <= 30;
//           case 'Mais semanas':
//             return itemTime > 30;
//           default:
//             return true;
//         }
//       });
//     }

//     this.resultadoFiltrado = filteredResults;
//   }

//   onIdiomaChange(idioma: string) {
//     this.selectedIdioma = idioma;
//   }

//   onApplyCheckboxFilters() {
//     this.applySearchFilters();
//     this.applyCheckboxFilters();
//   }

//   applyFilters(filtros: any) {
//     this.filtros = filtros;
//     this.applySearchFilters();
//     this.applyCheckboxFilters();
//   }
// }
