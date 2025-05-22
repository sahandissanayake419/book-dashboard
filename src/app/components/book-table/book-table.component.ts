import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-table',
  templateUrl: './book-table.component.html',
  styleUrls: ['./book-table.component.css']
})
export class BookTableComponent {
  @Input() books: any[] = []; // use 'any' type for now

  selectedBooks: number[] = [];

  toggleBookSelection(bookId: number) {
    if (this.selectedBooks.includes(bookId)) {
      this.selectedBooks = this.selectedBooks.filter(id => id !== bookId);
    } else {
      this.selectedBooks.push(bookId);
    }
  }

  deleteSelectedBooks() {
    // Emit or call a service to delete them
    console.log('Deleting books:', this.selectedBooks);
    // You can implement actual deletion via @Output or service call
  }

  // editBook(book: Book) {
  //   // Handle edit logic here (or emit to parent)
  //   console.log('Editing book:', book);
  // }
}


