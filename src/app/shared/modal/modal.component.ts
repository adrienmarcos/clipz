import {Component, OnInit} from '@angular/core';
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor(public modal: ModalService) {
  }

  public closeModal(): void {
    if (this.modal.isModalOpen()) {
      this.modal.toggleModal();
    }
  }

  ngOnInit(): void {}
}
