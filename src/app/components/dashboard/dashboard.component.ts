// src/app/components/dashboard/dashboard.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddBookComponent } from '../add-book/add-book.component';
import { BookTableComponent } from '../book-table/book-table.component';
import { BookService } from 'src/app/services/book.service';
import { Book } from 'src/app/models/book.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, AddBookComponent, BookTableComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  books: Book[] = [];
  showAddForm = false;

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.loadBooks();
  }

  handleSave(book: Book) {
  this.bookService.addBook(book).subscribe((newBook: Book) => {
    this.books.push(newBook);
    this.showAddForm = false;
  });
}

loadBooks() {
  this.bookService.getBooks().subscribe((data: Book[]) => {
    this.books = data;
  });
}

  closeForm() {
    this.showAddForm = false;
  }

  handleEdit(book: Book) {
    // Optional: open edit functionality
  }
}






