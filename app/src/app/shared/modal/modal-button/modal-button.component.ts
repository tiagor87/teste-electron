import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'alt-modal-button',
  templateUrl: './modal-button.component.html',
  styleUrls: ['./modal-button.component.scss']
})
export class ModalButtonComponent implements OnInit {
  @Input() public target;
  constructor() {}

  ngOnInit() {}
}
