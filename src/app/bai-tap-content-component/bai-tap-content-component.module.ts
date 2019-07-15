import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaiTapNgContentComponentComponent } from './bai-tap-ng-content-component/bai-tap-ng-content-component.component';
import { SanPhamComponent } from './san-pham/san-pham.component';
import { DanhSachSanPhamComponent } from './danh-sach-san-pham/danh-sach-san-pham.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [BaiTapNgContentComponentComponent, SanPhamComponent, DanhSachSanPhamComponent, ModalComponent],
  imports: [
    CommonModule
  ],
  exports:[
    BaiTapNgContentComponentComponent
  ]
})
export class BaiTapContentComponentModule { }
