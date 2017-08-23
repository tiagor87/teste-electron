import {
  Directive,
  OnDestroy,
  OnInit,
  ElementRef,
  EventEmitter,
  Output
} from '@angular/core';

@Directive({
  selector: '[altModalEvents]'
})
export class ModalEventsDirective implements OnInit, OnDestroy {
  @Output() public exibido = new EventEmitter();
  @Output() public escondido = new EventEmitter();
  constructor(private element: ElementRef) {}

  ngOnDestroy() {
    const modal = $(this.element.nativeElement);
    modal.off('shown.bs.modal');
    modal.off('hidden.bs.modal');
  }

  ngOnInit() {
    const modal = $(this.element.nativeElement);
    modal.on('shown.bs.modal', () => this.exibido.emit());
    modal.on('hidden.bs.modal', () => this.escondido.emit());
  }
}
