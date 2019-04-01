import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material';
import { MatBadgeModule } from '@angular/material/badge';

import { NotificationAlertComponent } from './notification-alert/notification-alert.component';

@NgModule({
  imports: 
  [
    CommonModule,
    MatButtonModule,
    MatBadgeModule
  ],
  declarations: 
  [
    NotificationAlertComponent
  ],
  exports:
  [
    CommonModule,
    NotificationAlertComponent
  ]
})
export class NotificationModule { }