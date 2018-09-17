import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {OrderService} from '../order.service';
import {Order} from '../../models/order';
import {Pizza} from '../../models/pizza';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  @Input() order: Order;

  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService
  ) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.orderService.getOrder(id).subscribe(
      res => this.order = res
    );
  }

  getOrders() {
    return this.orderService.getOrders();
  }

  getPizzasFromOrder(order: Order): Pizza[] {
    return this.orderService.getPizzasFromOrder(order);
  }

}
