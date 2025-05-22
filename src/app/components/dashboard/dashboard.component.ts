import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookCardComponent } from '../book-card/book-card.component';
import { BookTableComponent } from '../book-table/book-table.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, BookCardComponent, BookTableComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  books = [
    { id: 1, title: 'Book One', author: 'Author A', isbn: '123456', publicationDate: '2020-01-01' },
    { id: 2, title: 'Book Two', author: 'Author B', isbn: '789012', publicationDate: '2021-05-15' }
  ];
}


