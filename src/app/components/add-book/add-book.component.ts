import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  @Input() book: any = null;
  
  @Output() save = new EventEmitter<any>();
  @Output() close = new EventEmitter<void>();

  isEdit = false;

  model = {
    id: '',
    title: '',
    author: '',
    isbn: '',
    publicationDate: ''
  };

  ngOnInit() {
    if (this.book) {
      this.isEdit = true;
      this.model = { ...this.book };
    } else {
      this.model.id = Date.now().toString(); // Generate new ID for new books
    }
  }

  handleSave() {
    this.save.emit(this.model);
  }
}



