import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookCardComponent } from '../book-card/book-card.component';
import { BookTableComponent } from '../book-table/book-table.component';
import { AddBookComponent } from '../add-book/add-book.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, BookCardComponent, BookTableComponent, AddBookComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  books = [
    { id: 1, title: 'Book One', author: 'Author A', isbn: '123456', publicationDate: '2020-01-01' },
    { id: 2, title: 'Book Two', author: 'Author B', isbn: '789012', publicationDate: '2021-05-15' }
  ];

  showAddForm = false;
  showEditForm = false;
  currentBook: any = null;

  openAddForm() {
    this.currentBook = null;
    this.showAddForm = true;
    this.showEditForm = false;
  }

  openEditForm(book: any) {
    this.currentBook = book;
    this.showEditForm = true;
    this.showAddForm = false;
  }

  addOrUpdateBook(book: any) {
    const index = this.books.findIndex(b => b.id === book.id);
    if (index !== -1) {
      this.books[index] = book;
    } else {
      this.books.push(book);
    }
    this.showAddForm = false;
    this.showEditForm = false;
  }

  closeForm() {
    this.showAddForm = false;
    this.showEditForm = false;
  }
}


