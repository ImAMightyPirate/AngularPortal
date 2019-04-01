import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatMenuModule  } from '@angular/material';

import { UserIconComponent } from './user-icon/user-icon.component';

@NgModule({
  imports: 
  [
    CommonModule,
    FontAwesomeModule,
    MatButtonModule,
    MatMenuModule 
  ],
  declarations: 
  [
    UserIconComponent
  ],
  exports:
  [
    CommonModule,
    FontAwesomeModule,
    UserIconComponent
  ]
})
export class AuthorisationModule { }