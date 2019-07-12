import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {
  status:boolean = false;
  number:number = 12;

  //gia tri binding bieu thuc [ngSwitch]
  dkSwitch = "orange";

  changeColor(slColor){
    this.dkSwitch = slColor.value;
  }

dsSinhVien:any[] = [
  {maSV:1, tenSV:'nguyen van a', tuoi:18},
  {maSV:2, tenSV:'nguyen van b', tuoi:18},
  {maSV:3, tenSV:'nguyen van c', tuoi:18},
]

  constructor() { }

  ngOnInit() {
  }
  MoTa(){
  this.status = !this.status;
  }
  getStatus(){
    return true;
  }
  testNumber(inputNumber){
    this.number = inputNumber.value;
  }
}
