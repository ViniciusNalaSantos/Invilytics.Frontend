import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { DomSanitizer, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { CurrencyPipe, PercentPipe } from '@angular/common';
import { MatIconRegistry } from '@angular/material/icon';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes), provideClientHydration(withEventReplay()),
    CurrencyPipe,
    PercentPipe,
    MatIconRegistry,
    {
      provide: 'ICON_INIT',
      useFactory: (iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) => {
        return () => {
          iconRegistry.addSvgIcon(
            'overview',
            sanitizer.bypassSecurityTrustResourceUrl(
              'assets/icons/overview.svg'
            )
          );
        };
      },
      deps: [MatIconRegistry, DomSanitizer],
      multi: true
    }
  ]
};
