import {Component, Input, OnInit} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";



@Component({
  standalone: true,
  selector: 'app-button-card',
  templateUrl: './button-cards.component.html',
  styleUrls: ['./button-cards.component.scss'],
  imports: [IonicModule, CommonModule, FormsModule]

})
export class ButtonCardsComponent  implements OnInit {
  @Input() btn:any
  constructor() { }

  ngOnInit() {
    console.log(this.btn)
  }

}
