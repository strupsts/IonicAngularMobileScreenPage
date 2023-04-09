import { Component, OnInit } from '@angular/core';
import Swiper, {SwiperOptions, Pagination, Navigation} from "swiper";
import {IonicModule} from "@ionic/angular";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {SwiperModule} from "swiper/angular";


@Component({
  standalone: true,
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss'],
  imports: [IonicModule, CommonModule, FormsModule,SwiperModule]
})
export class SwiperComponent implements OnInit {
  public swiperConfig: SwiperOptions = {
    allowTouchMove: false,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.next-btn',
      prevEl: '.prev-btn',
    },
    loop: true
  }
  constructor() { }

  ngOnInit() {
    Swiper.use([Pagination,Navigation])
  }

}
