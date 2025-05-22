// src/app/app.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component'; // ✅ Add this


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SidebarComponent, DashboardComponent], // ✅ Add both here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'book-dashboard';
}


