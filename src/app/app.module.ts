import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BaiTapComponent } from './bai-tap/bai-tap.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentsComponent } from './contents/contents.component';
import { BaiTap2Component } from './bai-tap2/bai-tap2.component';
import { BaiTap2HeaderComponent } from './bai-tap2-header/bai-tap2-header.component';
import { BaiTap2FooterComponent } from './bai-tap2-footer/bai-tap2-footer.component';
import { BaiTap2SidebarComponent } from './bai-tap2-sidebar/bai-tap2-sidebar.component';
import { BaiTap2ContentComponent } from './bai-tap2-content/bai-tap2-content.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BaiTapComponent,
    SidebarComponent,
    ContentsComponent,
    BaiTap2Component,
    BaiTap2HeaderComponent,
    BaiTap2FooterComponent,
    BaiTap2SidebarComponent,
    BaiTap2ContentComponent
  ],//nơi khai báo các component cho module
  imports: [
    BrowserModule
  ],//nơi import các module khác của ứng dụng vào module này
  bootstrap: [AppComponent]//component chạy trong file index.html
})
export class AppModule { }
