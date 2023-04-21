import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appSample]'
})
export class SampleDirective {

  constructor(private element: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.element.nativeElement.style.color="red";
    this.element.nativeElement.style.fontWeight=800;
  }

  @HostListener('mouseleave') onmouseleave() {
    this.element.nativeElement.style.color="blue";
    this.element.nativeElement.style.fontWeight=800;
  }

}
