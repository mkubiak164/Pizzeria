import { Component, OnInit } from '@angular/core';
// @ts-ignore
import {Basket} from '../basket';
import {Pizza} from '../models/pizza';
import {Pasta} from '../models/pasta';
import {PizzasService} from '../pizzas/pizzas.service';
import {PastasService} from '../pastas/pastas.service';
import {BasketService} from './basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  pizzas: Pizza[];
  pastas: Pasta[];

  constructor(private pizzaService: PizzasService, private pastaService: PastasService, private basketService: BasketService) { }

  ngOnInit() {
    this.basketService.setShowAdress(true);
  }

  getPizzasInBasket(): Pizza[] {
    return this.pizzaService.getPizzasInBasket();
  }

  getPastasInBasket(): Pasta[] {
    return this.pastaService.getPastasInBasket();
  }

}
