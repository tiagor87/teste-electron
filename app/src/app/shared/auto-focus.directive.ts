import { Directive, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[altAutoFocus]'
})
export class AutoFocusDirective implements AfterViewInit {
  constructor(private element: ElementRef) {}

  ngAfterViewInit() {
    this.element.nativeElement.focus();
  }
}
