import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-table.component.html',
  styleUrls: ['./book-table.component.css']
})
export class BookTableComponent {
  @Input() books: any[] = []; // For now use any[] to prevent model import error
}

