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

  constructor(readonly http: HttpClient, private basketComponent: BasketComponent,
              private pizzaService: PizzasService, private pastaService: PastasService) { }

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
    let order = this.getOrder();

    const pizzas = this.basketComponent.getPizzasInBasket();
    order.pizzaIds = this.pizzaService.getPizzasIds(pizzas);

    const pastas = this.basketComponent.getPastasInBasket();
    order.pastaIds = this.pastaService.getPastaIds(pastas);
  }

  getOrder(): Order {
    return this.basketComponent.getOrder();
  }
}
