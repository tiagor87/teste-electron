import {
  Component,
  OnInit,
  OnDestroy,
  AfterViewChecked,
  Input,
  HostBinding,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef,
  Renderer,
  Renderer2
} from '@angular/core';

@Component({
  selector: 'alt-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnDestroy {
  @Input() public modalId;
  @Output() public exibido = new EventEmitter();
  @Output() public escondido = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  ngOnDestroy() {}
}
