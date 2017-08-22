import {
  Component,
  OnInit,
  OnDestroy,
  Input,
  EventEmitter,
  Output
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
