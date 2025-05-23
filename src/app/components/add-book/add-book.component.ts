// src/app/components/add-book/add-book.component.ts
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookService, Book } from '../../services/book.service'; // adjust path if needed

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  @Input() book: Book | null = null;
  @Input() isEdit = false;

  @Output() save = new EventEmitter<Book>();
  @Output() close = new EventEmitter<void>();

  newBook: Book = {
    id: 0,
    title: '',
    author: '',
    isbn: '',
    publicationDate: ''
  };

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    if (this.isEdit && this.book) {
      this.newBook = { ...this.book };
    } else {
      this.newBook.id = Math.floor(Math.random() * 10000); // or let backend assign
    }
  }

  onSave() {
    if (this.isEdit) {
      this.bookService.updateBook(this.newBook).subscribe({
        next: (updated) => {
          this.save.emit(updated);
        },
        error: (err) => console.error('Update failed:', err)
      });
    } else {
      this.bookService.addBook(this.newBook).subscribe({
        next: (created) => {
          this.save.emit(created);
        },
        error: (err) => console.error('Add failed:', err)
      });
    }
  }

  onClose() {
    this.close.emit();
  }
}






