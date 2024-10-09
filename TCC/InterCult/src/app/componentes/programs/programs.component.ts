import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../services/content/content.service';
import { Content } from '../../models/Content';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.css']
})
export class ProgramsComponent implements OnInit {
  Contents: Content[] = [];  // Todos os itens
  visibleContents: Content[] = []; // Itens visíveis no carrossel
  currentIndex: number = 0; // Índice atual
  visibleCount: number = 3; // Número de itens a serem exibidos por vez

  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
    this.contentService.GetContent().subscribe(data => {
      const dados = data.data; // Supondo que os dados estão em 'data.data'
      this.Contents = dados;
      this.updateVisibleContents(); // Atualiza os itens visíveis na inicialização
    });
  }

  updateVisibleContents() {
    this.visibleContents = this.Contents.slice(this.currentIndex, this.currentIndex + this.visibleCount);
  }
  
  moveCarousel(direction: string) {
    const maxIndex = this.Contents.length - this.visibleCount; // Índice máximo sem ultrapassar a quantidade de itens
  
    if (direction === 'next' && this.currentIndex < maxIndex) {
      this.currentIndex += this.visibleCount; // Avança três itens
    } else if (direction === 'prev' && this.currentIndex > 0) {
      this.currentIndex -= this.visibleCount; // Volta três itens
    }
  
    this.updateVisibleContents(); // Atualiza a lista de itens visíveis
  }
}
