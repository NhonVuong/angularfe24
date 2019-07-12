import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataBindingComponent } from './data-binding/data-binding.component';
//Module Angular hổ trợ cơ chế twoway-angular
import {FormsModule} from '@angular/forms';
import { BaiTapDataBindingComponent } from './bai-tap-data-binding/bai-tap-data-binding.component';
@NgModule({
  declarations: [DataBindingComponent, BaiTapDataBindingComponent],
  imports: [
    CommonModule, FormsModule
  ],
  exports:[DataBindingComponent, BaiTapDataBindingComponent]
})
export class DataBindingModule { }
