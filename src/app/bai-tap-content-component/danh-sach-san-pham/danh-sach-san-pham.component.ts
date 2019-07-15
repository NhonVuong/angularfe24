import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { SanPhamComponent } from '../san-pham/san-pham.component';

@Component({
  selector: 'app-danh-sach-san-pham',
  templateUrl: './danh-sach-san-pham.component.html',
  styleUrls: ['./danh-sach-san-pham.component.css']
})
export class DanhSachSanPhamComponent implements OnInit {

  mangSP:Array<{maSP:number, tenSP:string, gia:number}>=[
    {maSP:1, tenSP:'dien thoai', gia:18000},
    {maSP:2, tenSP:'laptop', gia:25000},
    {maSP:3, tenSP:'may tinh bang', gia:15000},
  ];
  //noi dung cua popup
  spModal:any = {};

  constructor() { }

  //DOM den danh sach cac the <app-san-pham></app-san-pham>
  @ViewChildren(SanPhamComponent) dsTagSanPham:QueryList<SanPhamComponent>; 
    
  ngOnInit() {
  }

  setDongGia(){
    this.dsTagSanPham.forEach((tagSP, index)=>{
      tagSP.sanPham.gia = 99999;
    })
  }

  eventXemChiTiet(e){
    this.spModal = e
    
  }
}
