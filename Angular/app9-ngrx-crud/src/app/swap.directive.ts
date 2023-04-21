import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appSwap]'
})
export class SwapDirective {
  constructor(private el:ElementRef) { 
    console.log(this.el)
  }

  @HostListener('mouseenter') onMouseEnter(){
    console.log(this.el.nativeElement)
    this.changeColors('green')
  }
  @HostListener('mouseleave') onMouseLeave(){
    console.log(this.el.nativeElement)
    this.changeColors('')
  }

  @HostListener('click') onClick(){
    let allElements = document.getElementsByClassName("isClicked")
    for(let i=0;i<allElements.length;i++){
      allElements[i].removeAttribute("class")
    }
    this.el.nativeElement.setAttribute('class','isClicked')
  }

  private changeColors(colorName:string){
    this.el.nativeElement.style.background = colorName;
  } 
}
