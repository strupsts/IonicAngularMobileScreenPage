import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutRestaurantPage } from './about-restaurant.page';

describe('AboutRestaurantPage', () => {
  let component: AboutRestaurantPage;
  let fixture: ComponentFixture<AboutRestaurantPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AboutRestaurantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
