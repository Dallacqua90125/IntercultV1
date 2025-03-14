// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { ContentService } from '../../services/content/content.service';
// import { Content } from '../../models/Content';

// @Component({
//   selector: 'app-content',
//   templateUrl: './content.component.html',
//   styleUrls: ['./content.component.css']
// })
// export class ContentComponent implements OnInit {
//   Contents: Content[] = [];
//   ContentsGeral: Content[] = []; // Se for necessário

//   constructor(private contentService: ContentService, private route: ActivatedRoute) {}

//   ngOnInit(): void {
//     // Aqui você pode buscar dados para o ID específico da rota, se necessário
//     const contentId = this.route.snapshot.paramMap.get('id'); // Pega o ID da rota

//     this.contentService.GetContent().subscribe(
//       data => {
//         const dados = data.data;
//         // Se você quiser filtrar os dados para o ID específico:
//         this.Contents = contentId ? dados.filter(item => item.id === +contentId) : dados;
//       },
//       error => {
//         console.error('Erro ao buscar conteúdo:', error);
//         // Você pode adicionar uma mensagem de erro para o usuário aqui
//       }
//     );
//   }
// }
