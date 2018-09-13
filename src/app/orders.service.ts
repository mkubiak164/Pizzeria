import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Order} from './order';
import {Adress} from './adress';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(
    readonly http: HttpClient,
  ) { }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>('http://localhost:3000/orders');
  }

  getOrder(id: number): Observable<Order> {
    return this.http.get<Order>('api/orders/${id}');
  }

  getAddresFromOrder(order: Order): Adress {
    return order.adress;
  }


}
