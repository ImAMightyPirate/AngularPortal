import { Component } from '@angular/core';

import { HeaderComponent } from './modules/header/header/header.component';
import { FooterComponent } from './modules/footer/footer/footer.component';
import { SidebarMenuComponent } from './modules/navigation/sidebar-menu/sidebar-menu.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  opened: boolean = true;
}
