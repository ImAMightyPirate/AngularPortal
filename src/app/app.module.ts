import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material';

import { HeaderModule } from './modules/header/header.module';
import { FooterModule } from './modules/footer/footer.module';
import { NavigationModule } from './modules/navigation/navigation.module';

import { AppComponent } from './app.component';

@NgModule({
  imports:      
  [    
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSidenavModule,

    HeaderModule,
    FooterModule,
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
