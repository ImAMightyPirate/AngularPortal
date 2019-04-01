import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatMenuModule  } from '@angular/material';

import { UserIconComponent } from './user-icon/user-icon.component';

@NgModule({
  imports: 
  [
    CommonModule,
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
    UserIconComponent
  ]
})
export class AuthorisationModule { }