import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appUserdate]',
})
export class UserdateDirective {
  constructor(private tdElement: ElementRef) {}

  // @HostListener('click') onClick(){
  //   console.log("You Just Clicked")
  //   this.tdElement.nativeElement.style.background = "red";
  //   this.tdElement.nativeElement.style.color="white"
  //   this.tdElement.nativeElement.innerHTML = new Date(this.tdElement.nativeElement.innerHTML).toLocaleString()
  //   console.log(this.tdElement.nativeElement.innerHTML)
  // }
  @HostListener('mouseenter') onMouseEnter() {
    this.changeColor( 'white','red',);
  }

  @HostListener('mouseout') onMouseOut() {
    this.changeColor('','');
  }

  private changeColor(value: string, back: string) {
    this.tdElement.nativeElement.style.color = value;
    this.tdElement.nativeElement.style.background = back;
  }
}
