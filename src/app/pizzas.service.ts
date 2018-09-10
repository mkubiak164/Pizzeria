import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Pizza} from './pizza';
import {PizzasComponent} from './pizzas/pizzas.component';

@Injectable({
  providedIn: 'root'
})
export class PizzasService {

  basket: Pizza[] = [];

  constructor(
    readonly http: HttpClient,
  ) { }

  getPizzas(): Observable<Pizza[]> {
    return this.http.get<Pizza[]>('http://localhost:3000/pizzas');
  }

  getPizza(id: number): Observable<Pizza> {
    return this.http.get<Pizza>('api/pizzas/${id}');
  }

  addPizzaToBasket(pizza: Pizza): void {
    this.basket.push(pizza);
  }

  getPizzasInBasket(): Pizza[] {
    return this.basket;
  }

}
