import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaiTapDatVeComponent } from './bai-tap-dat-ve/bai-tap-dat-ve.component';
import { DanhSachGheComponent } from './danh-sach-ghe/danh-sach-ghe.component';
import { GheComponent } from './ghe/ghe.component';

@NgModule({
  declarations: [BaiTapDatVeComponent, DanhSachGheComponent, GheComponent],
  imports: [
    CommonModule
  ],
  exports:[BaiTapDatVeComponent]
})
export class BaiTapDatVeModule { }
