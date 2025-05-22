// src/app/app.config.ts
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';

import { routes } from './app.routes';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BookCardComponent } from './components/book-card/book-card.component';
import { BookTableComponent } from './components/book-table/book-table.component';

export const appConfig = {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
  ]
};
