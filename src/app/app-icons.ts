import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

export function registerAppIcons(
  iconRegistry: MatIconRegistry,
  sanitizer: DomSanitizer
) {
  iconRegistry.addSvgIconLiteral(
    'test',
    sanitizer.bypassSecurityTrustHtml(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" fill="red"/>
      </svg>
    `)
  );
}
