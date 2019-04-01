import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatPaginatorModule, MatSortModule, MatTableModule, MatToolbarModule } from '@angular/material';

import { MasterDetailComponent } from './master-detail/master-detail.component';

@NgModule({
  imports:
  [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
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