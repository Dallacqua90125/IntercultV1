import { Component } from '@angular/core';

@Component({
  selector: 'app-carrosel',
  templateUrl: './carrosel.component.html',
  styleUrls: ['./carrosel.component.css']
})
export class CarroselComponent {
  items: string[] = [
    'Item 1', 'Item 2', 'Item 3', 
    'Item 4', 'Item 5', 'Item 6', 
    'Item 7', 'Item 8', 'Item 9'
  ];

  currentIndex: number = 0;
  itemsToShow: string[] = [];

  constructor() {
    this.updateItemsToShow();
  }

  updateItemsToShow() {
    this.itemsToShow = this.items.slice(this.currentIndex, this.currentIndex + 3);
  }

  next() {
    if (this.currentIndex + 3 < this.items.length) {
      this.currentIndex += 3;
      this.updateItemsToShow();
    }
  }

  previous() {
    if (this.currentIndex - 3 >= 0) {
      this.currentIndex -= 3;
      this.updateItemsToShow();
    }
  }

  canGoNext(): boolean {
    return this.currentIndex + 3 < this.items.length;
  }

  canGoPrevious(): boolean {
    return this.currentIndex > 0;
  }
}
