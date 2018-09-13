import { Component, OnInit } from '@angular/core';
// @ts-ignore
import {Basket} from '../basket';
import {Pizza} from '../pizza';
import {Pasta} from '../pasta';
import {PizzasService} from '../pizzas.service';
import {PastasService} from '../pastas.service';
import {Order} from '../order';
import {BasketService} from '../basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  pizzas: Pizza[];
  pastas: Pasta[];
  order: Order = new Order();
  showAdress: boolean;

  constructor(private pizzaService: PizzasService, private pastaService: PastasService) { }

  ngOnInit() {
    this.setShowAdress(true);
  }

  getPizzasInBasket(): Pizza[] {
    return this.pizzaService.getPizzasInBasket();
  }

  getPastasInBasket(): Pasta[] {
    return this.pastaService.getPastasInBasket();
  }

  countBasket(): number {
    return this.getPizzasInBasket().length + this.getPastasInBasket().length;
  }

  getOrder(): Order {
    return this.order;
  }

  setShowAdress(show: boolean) {
    this.showAdress = show;
  }

}
