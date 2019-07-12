import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  title:string = 'cybersoft';
  sinhVien:any = {maSV:1, tenSV:"nguyen van a"};
  constructor() { }

  ngOnInit() {
  }
//phuong thuc cu ly su kien click 
CapNhatSinhVien(inputTenSV){
  this.sinhVien.tenSV = inputTenSV.value;
}
}
