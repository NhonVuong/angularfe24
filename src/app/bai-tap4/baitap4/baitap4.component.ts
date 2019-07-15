import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baitap4',
  templateUrl: './baitap4.component.html',
  styleUrls: ['./baitap4.component.css']
})
export class Baitap4Component implements OnInit {
  
  dsSanPham=[];

  mangSP:Array<{maSP:number, tenSP:string, gia:number}>=[
    {maSP:1, tenSP:'dien thoai', gia:18000},
    {maSP:2, tenSP:'laptop', gia:25000},
    {maSP:3, tenSP:'may tinh bang', gia:15000},
  ];

  constructor() { }

  ngOnInit() {
    this.dsSanPham = [...this.mangSP];//coppy mangSP => gan cho dsSanPham
  }

  themSP(sanPham:any){
    this.dsSanPham.push(sanPham);
  }
  xoaSP(maSP: number){
    let index = this.dsSanPham.findIndex(sp=>sp.maSP===maSP);
    if(index != -1){
      this.dsSanPham.splice(index, 1);
    }
    // this.dsSanPham.splice(index, 1);
  }

  timKiemSP(tuKhoa:string){
    if(tuKhoa == ""){
      this.dsSanPham = [...this.mangSP];
    }
    tuKhoa = tuKhoa.toLowerCase();//chuyen thanh chu thuong
    this.dsSanPham = this.mangSP.filter(sp => sp.tenSP.toLowerCase().indexOf(tuKhoa) !== -1)
  }
}
