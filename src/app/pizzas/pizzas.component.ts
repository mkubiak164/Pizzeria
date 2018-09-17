import {Component, OnDestroy, OnInit} from '@angular/core';
import {Pizza} from '../models/pizza';
import {PizzasService} from './pizzas.service';
import {Subscription} from 'rxjs';
import {BasketService} from '../basket/basket.service';

@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.css'],
})
export class PizzasComponent implements OnInit, OnDestroy {
  // selectedPizza: Pizza;
  pizzas: Pizza[] = [];
  sub: Subscription;

  constructor(private readonly service: PizzasService, private basketService: BasketService) {
  }

  ngOnInit(): void {
    this.sub = this.service.getPizzas()
      .subscribe(res => this.pizzas = res);
    this.basketService.setShowAdress(false);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onSelect(pizza: Pizza): void {
    this.service.onSelect(pizza);
  }

  getPizzas(): Pizza[] {
    return this.pizzas;
  }

  addToBasket(pizza: Pizza): void {
    this.service.addPizzaToBasket(pizza);
  }

}
