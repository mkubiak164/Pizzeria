import { Injectable } from '@angular/core';
import {Pizza} from './pizza';
import {Pasta} from './pasta';
import {Observable, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {PizzasService} from './pizzas.service';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  private pizzas = new Subject<Pizza[]>();
  pastas: Pasta[];

  constructor(readonly http: HttpClient // ,
              // private pizzaService: PizzasService
  ) { }

  addPizza(pizza: Pizza): void {
   // this.http.post('url', pizza).subscribe(res => this.pizzas = res);
  }

  getPizza(): Observable<Pizza[]> {
    return this.pizzas.asObservable();
  }

  // getPizzasInBasket(): void {
  //   console.log('Basket Service');
  //   const pizzasInBasket: Pizza[] = this.pizzaService.getPizzasInBasket();
  //   console.log(pizzasInBasket);
  // }

}
