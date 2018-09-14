import { Injectable } from '@angular/core';
import {Pizza} from '../models/pizza';
import {Pasta} from '../models/pasta';
import {Observable, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {PizzasService} from '../pizzas/pizzas.service';
import {BasketComponent} from './basket.component';
import {Order} from '../models/order';
import {PastasService} from '../pastas/pastas.service';


@Injectable({
  providedIn: 'root'
})
export class BasketService {

  pastas: Pasta[];

  constructor(readonly http: HttpClient, private basketComponent: BasketComponent,
              private pizzaService: PizzasService, private pastaService: PastasService) { }


  countBasket(): number {
    return this.basketComponent.countBasket();
  }

  addBasketToOrder(): void {
    const order = this.getOrder();

    const pizzas = this.basketComponent.getPizzasInBasket();
    order.pizzaIds = this.pizzaService.getPizzasIds(pizzas);

    const pastas = this.basketComponent.getPastasInBasket();
    order.pastaIds = this.pastaService.getPastaIds(pastas);
  }

  getOrder(): Order {
    return this.basketComponent.getOrder();
  }

  setShowAdress(show: boolean): void {
    this.basketComponent.setShowAdress(show);
  }


}
