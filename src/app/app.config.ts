import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection, provideAppInitializer, inject } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { DomSanitizer, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { CurrencyPipe, PercentPipe } from '@angular/common';
import { MatIconRegistry } from '@angular/material/icon';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { registerAppIcons } from './app-icons';


export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch()),

    CurrencyPipe,
    PercentPipe,

    MatIconRegistry,

    provideAppInitializer(() => {
      registerAppIcons(
        inject(MatIconRegistry),
        inject(DomSanitizer)
      );
    })
  ]
};
