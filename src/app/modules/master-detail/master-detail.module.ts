import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatButtonModule, MatPaginatorModule, MatTableModule, MatToolbarModule } from '@angular/material';

import { MasterDetailComponent } from './master-detail/master-detail.component';

@NgModule({
  imports:
  [
    CommonModule,
    FontAwesomeModule,
    MatButtonModule,
    MatPaginatorModule,
    MatTableModule,
    MatToolbarModule
  ],
  declarations: 
  [
    MasterDetailComponent
  ],
  exports:
  [
    MasterDetailComponent
  ]
})
export class MasterDetailModule { }