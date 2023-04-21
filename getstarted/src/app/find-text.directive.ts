import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appFindText]',
})
export class FindTextDirective {
  constructor(private el: ElementRef) {
    console.log(this.el);
  }

  @HostListener('mouseenter') onMouseEnter() {
    console.log(this.el.nativeElement);
    this.addTooltip();
  }
  @HostListener('mouseleave') onMouseLeave() {
    console.log(this.el.nativeElement);
    this.removeTooltip();
  }

  // @HostListener('click') onClick() {
  //   let allElements = document.getElementsByClassName('isClicked');
  //   for (let i = 0; i < allElements.length; i++) {
  //     allElements[i].removeAttribute('class');
  //   }
  //   this.el.nativeElement.setAttribute('class', 'isClicked');
  // }

  private addTooltip() {
    console.log(this.el.nativeElement.children[0].style.display);
    // this.el.nativeElement.style.background = colorName;
    this.el.nativeElement.children[0].style.display = 'block';
  }
  private removeTooltip() {
    console.log(this.el.nativeElement.children[0].style.display);
    // this.el.nativeElement.style.background = colorName;
    this.el.nativeElement.children[0].style.display = 'none';
  }
}
