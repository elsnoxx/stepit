import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http'; // Přidání HTTP klienta
import { routes } from './app.routes'; // Importujete pole tras
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),  // Poskytování tras
    provideHttpClient(),    // Přidání HTTP klienta
    provideClientHydration() // Poskytování hydratace klienta
  ]
};
