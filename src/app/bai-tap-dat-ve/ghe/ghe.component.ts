import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Ghe from '../modal/Ghe';

@Component({
  selector: 'app-ghe',
  templateUrl: './ghe.component.html',
  styleUrls: ['./ghe.component.css']
})
export class GheComponent implements OnInit {

  //gia tri input ung voi [ghe] trong the <app-ghe [ghe]></app-ghe>
  @Input() ghe:Ghe = null;

  // dinh nghia su kien dat ghe dua du lieu ra component cha
  @Output() suKienDatGhe = new EventEmitter();
  dangDat:boolean = false;
  constructor() { }

  ngOnInit() {
  }

  datghe(){
    this.dangDat = !this.dangDat;

    //dung suKienOutput de dua du lieu ghe duoc click ra ngoai
    let gheDuocDat={
      soGhe: this.ghe.SoGhe,
      gia: this.ghe.Gia,
      dangDat: this.dangDat
    }

    //dua du lieu object gheDuocDat ra ngoai thong qua emit
    this.suKienDatGhe.emit(gheDuocDat);
  }
}
