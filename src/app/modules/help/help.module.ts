import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatMenuModule } from '@angular/material';

import { HelpIconComponent } from './help-icon/help-icon.component';

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
    HelpIconComponent
  ],
  exports:
  [
    CommonModule,
    FontAwesomeModule,
    HelpIconComponent
  ]
})
export class HelpModule { }