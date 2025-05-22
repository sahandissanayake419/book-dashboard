import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookCardComponent } from '../book-card/book-card.component';
import { BookTableComponent } from '../book-table/book-table.component';
import { AddBookComponent } from '../add-book/add-book.component';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    BookCardComponent,
    BookTableComponent,
    AddBookComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  showAddForm = false;

  books = [
    {
      id: 1,
      title: 'Book One',
      author: 'Author A',
      isbn: '123456',
      publicationDate: '2020-01-01'
    },
    {
      id: 2,
      title: 'Book Two',
      author: 'Author B',
      isbn: '789012',
      publicationDate: '2021-05-15'
    }
  ];

  addBook(book: any) {
    this.books.push(book);
    this.showAddForm = false;
  }
}

