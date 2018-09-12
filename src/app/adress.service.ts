import { Injectable } from '@angular/core';
import {BasketService} from './basket.service';

@Injectable({
  providedIn: 'root'
})
export class AdressService {

  basketService: BasketService;

  constructor() { }

  save(): void {
    this.basketService.addBasketToOrder();
  }

}
