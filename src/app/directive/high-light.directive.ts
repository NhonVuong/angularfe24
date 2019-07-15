import { Directive, ElementRef, Renderer2, HostListener, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective implements OnInit {

  @Input() mauNen = 'black';

  ngOnInit(): void {
    this.bgColor = this.mauNen;
  }

  @HostBinding('style.backgroundColor') bgColor:string = this.mauNen;
  @HostBinding('style.color') textColor:string = 'green';
  @HostBinding('style.fontSize') fontSize:string = '25px';
  @HostBinding('innerHTML') content:string = 'cybersoft directive';

  constructor(private elementRef:ElementRef, private render2:Renderer2) {
    //dùng để thay đổi thành phần giao diện
    // this.elementRef.nativeElement.style.backgroundColor = 'green';
    // this.elementRef.nativeElement.style.color = 'white';

    //dùng các phương thức của renderer 2 thay đổi thành phần giao diện
    // this.render2.addClass(this.elementRef.nativeElement, "text-success");
    // this.render2.setStyle(this.elementRef.nativeElement, 'background-color','black');
   } //elementRef: là đối tượng directive

   @HostListener('mouseenter') suKienHover(event: Event){
     this.bgColor = 'red';
     this.textColor = 'blue';
     //Hover vào chữ đen nền trắng
    //  this.render2.removeClass(this.elementRef.nativeElement, "text-success");
    // this.render2.addClass(this.elementRef.nativeElement, "text-white");
    // this.render2.setStyle(this.elementRef.nativeElement, 'background-color','#fff');
   }
  @HostListener('mouseleave') suKienMouseLeave(event: Event){
    this.bgColor = 'blue';
    this.textColor = 'red';
    // this.render2.addClass(this.elementRef.nativeElement, "text-success");
    // this.render2.setStyle(this.elementRef.nativeElement, 'background-color','black');
  }
}
