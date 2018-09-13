import { Component, OnInit } from '@angular/core';
import {Order} from '../order';
import {Subscription} from 'rxjs';
import {OrdersService} from '../orders.service';



@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders: Order[] = [];
  sub: Subscription;
  selectedOrder: Order;

  constructor(private ordersService: OrdersService) { }

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

}
