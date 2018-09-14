import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Order} from './order';
import {Adress} from './adress';
import {Status} from './orders/status';

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

  statusChanged(order: Order, status: Status): void {
    const url = 'http://localhost:3000/orders/' + order.id;
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');

    order.status = status;

    this.http.put(url, order, {
      headers: headers
    }).subscribe(res => {
      alert('Zmieniono status zamowienia');
    });
  }

  getOrder(id: number): Observable<Order> {
    return this.http.get<Order>('api/orders/${id}');
  }

  getAddresFromOrder(order: Order): Adress {
    return order.adress;
  }


}
