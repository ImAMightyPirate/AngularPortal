import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material';

@NgModule({
  imports: 
  [
    CommonModule,
    MatToolbarModule
  ],
  declarations: 
  [
    FooterComponent
  ],
  exports:
  [
    CommonModule,
    FooterComponent
  ]
})
export class FooterModule { }