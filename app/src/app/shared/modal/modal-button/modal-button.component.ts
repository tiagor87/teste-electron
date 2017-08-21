import {
  Component,
  OnInit,
  Input,
  HostBinding,
  ElementRef,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'alt-modal-button',
  templateUrl: './modal-button.component.html',
  styleUrls: ['./modal-button.component.scss']
})
export class ModalButtonComponent implements OnInit {
  @ViewChild('localizar') private localizarBtn: ElementRef;
  @Input() public target;
  constructor() {}

  ngOnInit() {}

  exibirModal() {
    this.localizarBtn.nativeElement.click();
  }
}
