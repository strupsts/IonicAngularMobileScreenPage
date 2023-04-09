import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ICardButton} from "../../../shared/interfaces";

@Component({
  standalone: true,
  selector: 'app-modal-overlay',
  templateUrl: './modal-overlay.component.html',
  styleUrls: ['./modal-overlay.component.scss'],
})
export class ModalOverlayComponent  implements OnInit {
  @Input() cardInfo:ICardButton = {
    ico: 'empty',
    text: 'empty',
    color: 'empty',
    bg: 'empy'
  }
  @Output() closeModalEmit = new EventEmitter()
  constructor() { }
  closeModal() {
    this.closeModalEmit.emit(false)
  }
  ngOnInit() {
  }

}
