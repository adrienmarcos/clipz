import { Component, Input, ElementRef, OnInit } from '@angular/core';
import { ModalService } from "../../services/modal.service";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input()
  modalID: string = '';

  constructor(public modal: ModalService, public el: ElementRef) {}

  public closeModal(): void {
    this.modal.toggleModal(this.modalID);
  }

  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement);
  }
}
