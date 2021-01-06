import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowDataComponent } from './show-data/show-data.component';



@NgModule({
  declarations: [ShowDataComponent],
  exports: [
    ShowDataComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ShareModule { }
