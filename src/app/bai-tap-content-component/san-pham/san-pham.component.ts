import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-san-pham',
  templateUrl: './san-pham.component.html',
  styleUrls: ['./san-pham.component.css']
})
export class SanPhamComponent implements OnInit {
  

  // @Input() tenSP:string="";
  // @Input() gia:string="";

  //EventEmitter: dai dien cho 1 su kien nao do de dua du lieu ra component cha
  @Output() eventXemChiTiet = new EventEmitter();
  @Input() sanPham:any = {};

  constructor() { }

  ngOnInit() {
  }

  xemChiTiet(){
    //dua du lieu sanPham duoc click ra ngoai thong qua phuong thuc emit
    this.eventXemChiTiet.emit(this.sanPham);
  }

}
