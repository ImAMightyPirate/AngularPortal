import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material';

import { AuthorisationModule } from './../authorisation/authorisation.module';
import { BrandingModule } from './../branding/branding.module';
import { HelpModule } from './../help/help.module';
import { NavigationModule } from './../navigation/navigation.module';
import { NotificationModule } from './../notification/notification.module';

@NgModule({
  imports: 
  [
    CommonModule,
    MatToolbarModule,
    AuthorisationModule,
    BrandingModule,
    HelpModule,
    NavigationModule,
    NotificationModule
  ],
  declarations: 
  [
    HeaderComponent
  ],
  exports:
  [
    CommonModule,
    AuthorisationModule,
    BrandingModule,
    HelpModule,
    NavigationModule,
    NotificationModule,
    HeaderComponent
  ]
})
export class HeaderModule { }