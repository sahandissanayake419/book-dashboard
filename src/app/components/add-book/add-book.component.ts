import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {
  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<any>();

  newBook = {
    id: Math.floor(Math.random() * 10000),
    title: '',
    author: '',
    isbn: '',
    publicationDate: ''
  };

  onSave() {
    this.save.emit(this.newBook);
  }

  onClose() {
    this.close.emit();
  }
}
