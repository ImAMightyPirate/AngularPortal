import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductLogoComponent } from './product-logo/product-logo.component';

@NgModule({
  imports: 
  [
    CommonModule
  ],
  declarations: 
  [
    ProductLogoComponent
  ],
  exports: 
  [
    CommonModule,
    ProductLogoComponent
  ]
})
export class BrandingModule { }