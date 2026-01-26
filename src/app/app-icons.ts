import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

export function registerAppIcons(
  iconRegistry: MatIconRegistry,
  sanitizer: DomSanitizer
) {
  iconRegistry.addSvgIcon(
    'overview',
    sanitizer.bypassSecurityTrustResourceUrl('icons/overview.svg')
  );
}
