import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {OrderService} from '../order.service';
import {Order} from '../../models/order';
import {Pizza} from '../../models/pizza';
import {PizzasService} from '../../pizzas/pizzas.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  @Input() order: Order;

  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService,
    private pizzaService: PizzasService
  ) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.orderService.getOrder(id).subscribe(
      res => this.order = res
    );
  }

  getPizzasFromOrder(): Pizza[] {
    let pizzas: Pizza[] = [];
    // for (let i = 0; i < this.order.pizzaIds.length; i++) {
    //   this.pizzaService.getPizza(this.order.pizzaIds[i]).subscribe(
    //       r => pizzas.push(r)
    //   );
    // }

    return pizzas;
  }

}
