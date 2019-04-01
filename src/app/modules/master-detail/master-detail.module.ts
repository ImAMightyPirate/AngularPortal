import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatBottomSheetModule, MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatPaginatorModule, MatSortModule, MatTableModule, MatToolbarModule } from '@angular/material';

import { MasterDetailComponent } from './master-detail/master-detail.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  imports:
  [
    CommonModule,
    FontAwesomeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatToolbarModule
  ],
  entryComponents: 
  [
    MasterDetailComponent, 
    DetailComponent
  ],
  declarations: 
  [
    MasterDetailComponent,
    DetailComponent
  ],
  exports:
  [
    MasterDetailComponent
  ]
})
export class MasterDetailModule { }