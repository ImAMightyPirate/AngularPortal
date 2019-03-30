import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material';

import { HamburgerMenuComponent } from './hamburger-menu/hamburger-menu.component';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import { MenuToggleService } from './services/menu-toggle.service';

@NgModule({
  imports: 
  [
    CommonModule,
    FontAwesomeModule,
    MatButtonModule
  ],
  declarations: 
  [
    HamburgerMenuComponent,
    SidebarMenuComponent
  ],
  exports:
  [
    CommonModule,
    FontAwesomeModule,
    HamburgerMenuComponent,
    SidebarMenuComponent
  ],
  providers: [MenuToggleService]
})
export class NavigationModule { }