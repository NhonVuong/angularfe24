import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai-tap3',
  templateUrl: './bai-tap3.component.html',
  styleUrls: ['./bai-tap3.component.css']
})
export class BaiTap3Component implements OnInit {
  name:string = "";
  isLogin:boolean = false;
  constructor() { }

  ngOnInit() {
    if(localStorage.getItem('userLogin')){
      this.isLogin = true;
      this.name = localStorage.getItem('userLogin');
    }
  }

  dangNhap(user:string, pass:string){
    if(user === "cybersoft" && pass === "cybersoft"){
      this.isLogin = true;
      this.name = "cybersoft";
      //dang nhap thanh cong luu vafo localStorage
      localStorage.setItem('userLogin', user);
      document.getElementById('btnClose').click();
    }
  }
  logOut(){
    this.isLogin = false;
    this.name = "";
    document.getElementById('btnClose').click();
    localStorage.removeItem('userLogin');
  }
}
