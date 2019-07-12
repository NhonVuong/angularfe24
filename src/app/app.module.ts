import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BaiTap2Component } from './bai-tap2/bai-tap2.component';
import { BaiTap2HeaderComponent } from './bai-tap2-header/bai-tap2-header.component';
import { BaiTap2FooterComponent } from './bai-tap2-footer/bai-tap2-footer.component';
import { BaiTap2SidebarComponent } from './bai-tap2-sidebar/bai-tap2-sidebar.component';
import { BaiTap2ContentComponent } from './bai-tap2-content/bai-tap2-content.component';
import { BaiTap1Module } from './bai-tap/bai-tap1/bai-tap1.module';
import { DataBindingModule } from './data-binding/data-binding.module';
import { DirectiveModule } from './directive/directive.module';
import { BaiTap3Module } from './bai-tap3/bai-tap3.module';
import { BaiTap4Module } from './bai-tap4/bai-tap4.module';

@NgModule({
  declarations: [
    AppComponent,
    BaiTap2Component,
    BaiTap2HeaderComponent,
    BaiTap2FooterComponent,
    BaiTap2SidebarComponent,
    BaiTap2ContentComponent
  ],//nơi khai báo các component cho module
  imports: [
    BrowserModule, 
    BaiTap1Module, 
    DataBindingModule,
    DirectiveModule,
    BaiTap3Module,
    BaiTap4Module
  ],//nơi import các module khác của ứng dụng vào module này
  bootstrap: [AppComponent]//component chạy trong file index.html
})
export class AppModule { }
