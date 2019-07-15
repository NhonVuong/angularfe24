import { Component, OnInit, ViewChild } from '@angular/core';
import { DanhSachSanPhamComponent } from '../danh-sach-san-pham/danh-sach-san-pham.component';

@Component({
  selector: 'app-bai-tap-ng-content-component',
  templateUrl: './bai-tap-ng-content-component.component.html',
  styleUrls: ['./bai-tap-ng-content-component.component.css']
})
export class BaiTapNgContentComponentComponent implements OnInit {

  constructor() { }

  @ViewChild('tagDSSP', {static: false}) tagDSSP:DanhSachSanPhamComponent;

  ngOnInit() {
  }

  themSanPham(spMoi){
    this.tagDSSP.mangSP.push(spMoi);
  }

}
