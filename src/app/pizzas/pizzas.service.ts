import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Pizza} from '../models/pizza';
import {PizzasComponent} from './pizzas.component';
import {forEach} from '@angular/router/src/utils/collection';

@Injectable({
  providedIn: 'root'
})
export class PizzasService {

  basket: Pizza[] = [];
  private angular: any;

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

  getPizzasIds(pizzas: Pizza[]): number[] {
    const pizzasIds = [];
    for (let i = 0; i < pizzas.length; i++) {
        pizzasIds.push(pizzas[i].id);
    }
    return pizzasIds;
  }

  getPizzasInBasket(): Pizza[] {
    return this.basket;
  }

}
