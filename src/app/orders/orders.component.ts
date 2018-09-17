import { Component, OnInit } from '@angular/core';
import {Order} from '../models/order';
import {Subscription} from 'rxjs';
import {OrdersService} from '../services/orders.service';
import {Status} from './status';
import {Router} from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders: Order[] = [];
  sub: Subscription;
  selectedOrder: Order;
  order: Order;

  constructor(private ordersService: OrdersService,
              private router: Router
              ) { }

  ngOnInit() {
    this.sub = this.ordersService.getOrders()
      .subscribe(res => this.orders = res);
  }

  getOrders(): Order[] {
    return this.orders;
  }

  getOrder(id: number): Order {
    return this.selectedOrder;
  }

  statusChanged(order: Order, status: Status): void {
    this.ordersService.statusChanged(order, status);
  }

  getStatuses(): Status[] {
    const s1 = new Status(1, 'w trakcie');
    const s2 = new Status(2, 'zrealizowano');

    return [s1, s2];
  }

  onSelect(order: Order): void {
    this.order = order;
    this.router.navigate(['/orders', order.id]);
  }

}
