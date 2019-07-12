import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/header/header.component';
import { FooterComponent } from 'src/app/footer/footer.component';
import { BaiTapComponent } from '../bai-tap.component';
import { SidebarComponent } from 'src/app/sidebar/sidebar.component';
import { ContentsComponent } from 'src/app/contents/contents.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BaiTapComponent,
    SidebarComponent,
    ContentsComponent,
  ],//nơi khai báo component
  imports: [
    CommonModule,
  ],//dùng để import nhiều module khác vào
  exports:[BaiTapComponent]
  //cho phep những component nào từ module này (thuộc declarations) có thể sử dụng ở nơi import module này vào
})
export class BaiTap1Module { }
