import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { MatSidenavModule } from '@angular/material';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HeaderModule } from './modules/header/header.module';
import { FooterModule } from './modules/footer/footer.module';
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
    MatSidenavModule,
    FontAwesomeModule,

    HeaderModule,
    FooterModule,
    MasterDetailModule,
    NavigationModule
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
export class AppModule { }
