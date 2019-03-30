import { Component } from '@angular/core';
import { Subscription }   from 'rxjs';

import { HeaderComponent } from './modules/header/header/header.component';
import { FooterComponent } from './modules/footer/footer/footer.component';
import { SidebarMenuComponent } from './modules/navigation/sidebar-menu/sidebar-menu.component';
import { MenuToggleService } from './modules/navigation/services/menu-toggle.service';

@Component({
  selector: 'portal-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  private isMenuOpened: boolean;

  private menuToggleServiceSubscription: Subscription;

  constructor(private menuToggleService: MenuToggleService) {
      this.isMenuOpened = false;

      this.menuToggleServiceSubscription = menuToggleService.menuToggled$.subscribe(
        () => { 
          this.isMenuOpened = !this.isMenuOpened; });
  }

  ngOnDestroy() {
    this.menuToggleServiceSubscription.unsubscribe();
  }
}
