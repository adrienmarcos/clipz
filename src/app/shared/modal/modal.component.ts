import { Component, Input } from '@angular/core';
import { ModalService } from "../../services/modal.service";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  @Input()
  modalID: string = '';

  constructor(public modal: ModalService) {}

  public closeModal(): void {
    this.modal.toggleModal(this.modalID);
  }
}
