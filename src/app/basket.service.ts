import { Injectable } from '@angular/core';
import {Pizza} from './pizza';
import {Pasta} from './pasta';
import {Observable, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {PizzasService} from './pizzas.service';
import {BasketComponent} from './basket/basket.component';
import {Order} from './order';
import {PastasService} from './pastas.service';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  private pizzas = new Subject<Pizza[]>();
  pastas: Pasta[];
  order: Order;
  pizzaService: PizzasService;
  pastaService: PastasService;

  constructor(readonly http: HttpClient, private basketComponent: BasketComponent) { }

  addPizza(pizza: Pizza): void {
   // this.http.post('url', pizza).subscribe(res => this.pizzas = res);
  }

  getPizza(): Observable<Pizza[]> {
    return this.pizzas.asObservable();
  }

  countBasket(): number {
    return this.basketComponent.countBasket();
  }

  addBasketToOrder(): void {
    const pizzas = this.basketComponent.getPizzasInBasket();
    const pizzaIds = this.pizzaService.getPizzasIds(pizzas);
    this.order.pizzaIds = pizzaIds;


    const pastas = this.basketComponent.getPastasInBasket();
    const pastaIds = this.pastaService.getPastaIds(pastas);
    this.order.pastaIds = pastaIds;
  }

}
