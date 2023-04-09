import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {ButtonCardsComponent} from "../components/UI/button-cards/button-cards.component";
import {SwiperComponent} from "../components/UI/swiper/swiper.component";
import {ICardButton} from "../shared/interfaces";
import {ModalOverlayComponent} from "../components/UI/modal-overlay/modal-overlay.component";


@Component({
  selector: 'app-about-restaurant',
  templateUrl: './about-restaurant.page.html',
  styleUrls: ['./about-restaurant.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ButtonCardsComponent, SwiperComponent, ModalOverlayComponent]
})
export class AboutRestaurantPage implements OnInit {
  isModal:ICardButton | false = false
  aboutInfo = {
    descriptionFirstPart: 'Два этажа. Пять уютных залов на любой вкус. Банкетный зал. Мангальная до 15 человек. VIP-зал. Есть, кальянный зал. Караоке каждый день до последнего гостя, в пятницу и субботу - с 19 часов до утра. Отличная кухня. Блюда на любой вкус.',
    descriptionSecondPart: 'Восточная, европейская, итальянская и русская кухни. Парковка бесплатная. Удобный танцпол. Вход свободный. Wi-Fi. Бизнес-ланч с 12:00 до 16:00 всего 250 рублей. Хорошее место для семейного отдыха и для того, чтобы отдохнуть с друзьями.',
    descriptionThirdPart: 'Особые условия для проведения свадеб, банкетов и юбилеев. Спешите заказать торжество в нашем ресторане!',
    adress: 'г. Санкт-Петербург, 7-я Красноармейская ул., д. 5 м. Технологический институт (494 м), м. Фрунзенская (639 м)'
  }
  aboutButtonsArr:ICardButton[] = [
    {
      ico: 'images-outline',
      text: 'Фотогаллерея',
      color: 'white',
      bg: 'linear-gradient(rgba(0,0,0,0.2), rgba(5,5,5,0.24)),url(\'../../../assets/images/gallery-ico.jfif\')'
    },{
      ico: 'call-outline',
      text: 'Позвонить',
      color: 'black',
      bg: '#FFD954'
    },{
      ico: 'location-outline',
      text: 'Адрес на карте',
      color: 'black',
      bg: '#A4E466'
    },{
      ico: 'globe-outline',
      text: 'Мы в интернете',
      color: 'white',
      bg: 'linear-gradient(rgba(0,0,0,0.2), rgba(5,5,5,0.24)),url(\'../../../assets/images/web-ico.jfif\')'
    }
  ]
  details:boolean = false
  constructor() {
  }

  toggleDetails(){
    this.details = !this.details
  }
  openModal(card:ICardButton){
    this.isModal = card
  }
  ngOnInit() {
  }

}
