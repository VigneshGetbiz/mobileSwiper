import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EllipsisPipe } from './pipe/ellipsis/ellipsis.pipe';



@NgModule({
  declarations: [
    EllipsisPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EllipsisPipe
  ]
})
export class SharedModule { }
