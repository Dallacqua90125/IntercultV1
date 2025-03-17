import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Content } from '../../../models/Content';
import { ContentService } from '../../../services/contentService/content.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  Contents: Content[] = [];
  ContentsGeral: Content[] = [];

  constructor(private contentService: ContentService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const contentId = this.route.snapshot.paramMap.get('id');

    this.contentService.GetContent().subscribe(
      data => {
        const dados = data;
        this.Contents = contentId ? dados.filter(item => item.id === +contentId) : dados;
      },
      error => {
        console.error('Erro ao buscar conteúdo:', error);
      }
    );
  }
}
