import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  @Output() searchEvent = new EventEmitter<any>();

  locais: string[] = ['Todos', 'Itália', 'França', 'Canadá', 'Estados Unidos', 'Espanha', 'Austrália', 'Inglaterra'];
  agencias: string[] = ['Todas', 'EF', 'CI', 'IE', 'Intercultural'];
  types: string[] = ['Qualquer tipo', 'Cursos de Idioma', 'Cursos Acadêmicos', 'Intercâmbio de Férias'];

  selectedLocation: string = 'Todos';
  selectedAgency: string = 'Todas';
  selectedType: string = 'Qualquer tipo';

  constructor(private router: Router) {}

  onSearch() {
    // Emitir os filtros selecionados
    this.searchEvent.emit({
      location: this.selectedLocation,
      agency: this.selectedAgency,
      type: this.selectedType
    });

    // Redirecionar para a página de resultados
    this.router.navigate(['/results'], { queryParams: { location: this.selectedLocation, agency: this.selectedAgency, type: this.selectedType } });

    this.selectedLocation = 'Todos';
    this.selectedAgency = 'Todas';
    this.selectedType = 'Qualquer tipo';
  }
}
