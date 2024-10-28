import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  @Output() searchEvent = new EventEmitter<any>();

  locais: string[] = ['Todos', 'Itália', 'Franca', 'Canada'];
  agencias: string[] = ['Todas', 'EF', 'CI'];
  times: string[] = ['Qualquer duração', '1 semana', '2 semanas', '3 semanas', '4 semanas'];

  selectedLocation: string = 'Todos';
  selectedAgency: string = 'Todas';
  selectedTime: string = 'Qualquer duração';

  constructor(private router: Router) {}

  onSearch() {
    // Emitir os filtros selecionados
    this.searchEvent.emit({
      location: this.selectedLocation,
      agency: this.selectedAgency,
      time: this.selectedTime
    });

    // Redirecionar para a página de resultados
    this.router.navigate(['/results'], { queryParams: { location: this.selectedLocation, agency: this.selectedAgency, time: this.selectedTime } });
  }
}
