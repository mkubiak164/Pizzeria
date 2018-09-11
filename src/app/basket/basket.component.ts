import { Component, OnInit } from '@angular/core';
// @ts-ignore
import {Basket} from '../basket';
import {Pizza} from '../pizza';
import {Pasta} from '../pasta';
import {PizzasService} from '../pizzas.service';
import {identifierName} from '@angular/compiler';
import {PastasService} from '../pastas.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  pizzas: Pizza[];
  pastas: Pasta[];

  constructor(private pizzaService: PizzasService, private pastaService: PastasService) { }

  ngOnInit() {
  }

  getPizzasInBasket(): Pizza[] {
    return this.pizzaService.getPizzasInBasket();
  }

  getPastasInBasket(): Pasta[] {
    return this.pastaService.getPastasInBasket();
  }

}
