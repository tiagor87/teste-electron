import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ModalComponent } from './modal/modal.component';
import { ModalFooterComponent } from './modal/modal-footer/modal-footer.component';
import { ModalBodyComponent } from './modal/modal-body/modal-body.component';
import { ModalHeaderComponent } from './modal/modal-header/modal-header.component';
import { ModalButtonComponent } from './modal/modal-button/modal-button.component';
import { ModalCloseButtonComponent } from './modal/modal-close-button/modal-close-button.component';
import { AutoFocusDirective } from './auto-focus.directive';
import { ModalEventsDirective } from './modal/modal-events.directive';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    ModalComponent,
    ModalFooterComponent,
    ModalBodyComponent,
    ModalHeaderComponent,
    ModalButtonComponent,
    ModalCloseButtonComponent,
    AutoFocusDirective,
    ModalEventsDirective,
    SidebarComponent,
    ContentComponent
  ],
  exports: [
    ModalComponent,
    ModalFooterComponent,
    ModalBodyComponent,
    ModalHeaderComponent,
    ModalButtonComponent,
    ModalCloseButtonComponent,
    AutoFocusDirective,
    SidebarComponent,
    ContentComponent
  ]
})
export class SharedModule {}
