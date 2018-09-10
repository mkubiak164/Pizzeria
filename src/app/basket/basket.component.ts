import { Component, OnInit } from '@angular/core';
// @ts-ignore
import {Basket} from '../basket';
import {Pizza} from '../pizza';
import {Pasta} from '../pasta';
import {PizzasService} from '../pizzas.service';
@Component({
  selector: 'app-root',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  pizzas: Pizza[];
  pastas: Pasta[];

  constructor(private pizzaService: PizzasService) { }

  ngOnInit() {
  }

  getPizzasInBasket(): Pizza[] {
    return this.pizzaService.getPizzasInBasket();
  }

}
