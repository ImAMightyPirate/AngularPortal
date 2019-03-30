import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyLogoComponent } from './company-logo/company-logo.component';

@NgModule({
  imports: 
  [
    CommonModule
  ],
  declarations: 
  [
    CompanyLogoComponent
  ],
  exports: 
  [
    CommonModule,
    CompanyLogoComponent
  ]
})
export class BrandingModule { }