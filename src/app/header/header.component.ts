import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header", //tên thẻ
  templateUrl: "./header.component.html", //đường dẫn chứa đến file chứa nội dung html
  styleUrls: ["./header.component.css"] //đường dãn đến file chưa css (Luu ý: css chỉ áp dụng cho html của component này)
})

//thành phần ts của thẻ(code javascript)
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
