import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-book-table',
  standalone: true,
  templateUrl: './book-table.component.html',
  styleUrls: ['./book-table.component.css']
})
export class BookTableComponent {
  @Input() books: any[] = [];
  @Output() edit = new EventEmitter<any>();

  selectedBooks: number[] = [];

  toggleSelection(id: number) {
    this.selectedBooks.includes(id)
      ? this.selectedBooks = this.selectedBooks.filter(bookId => bookId !== id)
      : this.selectedBooks.push(id);
  }

  deleteSelectedBooks() {
    this.books = this.books.filter(book => !this.selectedBooks.includes(book.id));
    this.selectedBooks = [];
  }

  triggerEdit(book: any) {
    this.edit.emit(book);
  }
}




