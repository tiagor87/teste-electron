import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'alt-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() public modalId;
  constructor() {}

  ngOnInit() {}
}
