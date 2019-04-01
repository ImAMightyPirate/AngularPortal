import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { MatIconModule, MatIconRegistry, MatSidenavModule } from '@angular/material';

import { HeaderModule } from './modules/header/header.module';
import { MasterDetailModule } from './modules/master-detail/master-detail.module';
import { NavigationModule } from './modules/navigation/navigation.module';

import { AppComponent } from './app.component';

@NgModule({
  imports:      
  [    
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot([]),
    MatIconModule,
    MatSidenavModule,

    HeaderModule,
    MasterDetailModule,
    NavigationModule
  ],
  providers:
  [
    MatIconRegistry
  ],
  declarations: 
  [ 
    AppComponent
  ],
  bootstrap:    
  [ 
    AppComponent 
  ]
})
export class AppModule { 
  constructor(public matIconRegistry: MatIconRegistry) {
    matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
  }
}
