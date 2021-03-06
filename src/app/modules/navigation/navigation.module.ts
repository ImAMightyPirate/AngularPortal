import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MatButtonModule, MatListModule } from '@angular/material';

import { HamburgerMenuComponent } from './hamburger-menu/hamburger-menu.component';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import { MenuToggleService } from './services/menu-toggle.service';

@NgModule({
  imports: 
  [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    MatButtonModule,
    MatListModule
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