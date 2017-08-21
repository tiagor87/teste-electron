import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { ModalFooterComponent } from './modal/modal-footer/modal-footer.component';
import { ModalBodyComponent } from './modal/modal-body/modal-body.component';
import { ModalHeaderComponent } from './modal/modal-header/modal-header.component';
import { ModalButtonComponent } from './modal/modal-button/modal-button.component';
import { ModalCloseButtonComponent } from './modal/modal-close-button/modal-close-button.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ModalComponent,
    ModalFooterComponent,
    ModalBodyComponent,
    ModalHeaderComponent,
    ModalButtonComponent,
    ModalCloseButtonComponent
  ],
  exports: [
    ModalComponent,
    ModalFooterComponent,
    ModalBodyComponent,
    ModalHeaderComponent,
    ModalButtonComponent,
    ModalCloseButtonComponent
  ]
})
export class SharedModule {}
