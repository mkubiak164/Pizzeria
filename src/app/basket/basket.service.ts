import { Injectable } from '@angular/core';
import {Pizza} from '../models/pizza';
import {Pasta} from '../models/pasta';
import {Observable, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {PizzasService} from '../pizzas/pizzas.service';
import {Order} from '../models/order';
import {PastasService} from '../pastas/pastas.service';


@Injectable({
  providedIn: 'root'
})
export class BasketService {

  order: Order = new Order();
  showAdress: boolean;

  constructor(readonly http: HttpClient,
              private pizzaService: PizzasService, private pastaService: PastasService) { }

  countBasket(): number {
    return this.pizzaService.getPizzasInBasket().length + this.pastaService.getPastasInBasket().length;
  }

  addBasketToOrder(): void {
    const order = this.getOrder();

    const pizzas = this.pizzaService.getPizzasInBasket();
    order.pizzaIds = this.pizzaService.getPizzasIds(pizzas);

    const pastas = this.pastaService.getPastasInBasket();
    order.pastaIds = this.pastaService.getPastaIds(pastas);
  }

  getOrder(): Order {
    return this.order;
  }

  setShowAdress(show: boolean) {
    this.showAdress = show;
  }
}
