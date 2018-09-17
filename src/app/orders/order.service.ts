import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Order} from '../models/order';
import {Pizza} from '../models/pizza';
import {PizzasService} from '../pizzas/pizzas.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    readonly htttp: HttpClient,
    private pizzaService: PizzasService,
  ) {  }

  getOrders(): Observable<Order[]> {
    return this.htttp.get<Order[]>('http://localhost:3000/orders');
  }

  getOrder(id: number): Observable<Order> {
    return this.htttp.get<Order>('http://localhost:3000/orders' + id);
  }

  // getPizzasFromOrder(order: Order): Pizza[] {
  //
  // }

}
