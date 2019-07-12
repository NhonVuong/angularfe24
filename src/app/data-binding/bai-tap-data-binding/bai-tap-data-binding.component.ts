import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai-tap-data-binding',
  templateUrl: './bai-tap-data-binding.component.html',
  styleUrls: ['./bai-tap-data-binding.component.css']
})
export class BaiTapDataBindingComponent implements OnInit {
  email:string = "";
  fullName:string = "";

  constructor() { }

  ngOnInit() {
  }
  ChangeName(value:string){
  this.fullName = value;
}
}
