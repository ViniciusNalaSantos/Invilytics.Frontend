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
  iconRegistry.addSvgIcon(
    'investments',
    sanitizer.bypassSecurityTrustResourceUrl('icons/investments.svg')
  );
  iconRegistry.addSvgIcon(
    'data-management',
    sanitizer.bypassSecurityTrustResourceUrl('icons/data_management.svg')
  );
  iconRegistry.addSvgIcon(
    'settings',
    sanitizer.bypassSecurityTrustResourceUrl('icons/settings.svg')
  );
  iconRegistry.addSvgIcon(
    'account',
    sanitizer.bypassSecurityTrustResourceUrl('icons/account.svg')
  );
}
