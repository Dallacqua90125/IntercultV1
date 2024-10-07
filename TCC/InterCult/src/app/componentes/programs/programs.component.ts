// programs.component.ts
import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../services/content/content.service';
import { Content } from '../../models/Content';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrl: './programs.component.css' 
})
export class ProgramsComponent implements OnInit {

  Contents: Content[] = []; 

  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
    
    this.contentService.GetContent().subscribe(data => {
      const dados = data.data; 
      this.Contents = dados; 
    });
  }
}