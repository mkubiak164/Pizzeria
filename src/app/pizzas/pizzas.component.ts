import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {Pizza} from '../pizza';
import {PizzasService} from '../pizzas.service';
import {Observable, Subscription} from 'rxjs';
import {BasketService} from '../basket.service';

@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.css'],
})
export class PizzasComponent implements OnInit, OnDestroy, AfterViewInit {
  selectedPizza: Pizza;
  pizzas: Pizza[] = [];
  sub: Subscription;

  constructor(private readonly service: PizzasService, private basketService: BasketService) {
  }

  ngOnInit(): void {
    this.sub = this.service.getPizzas()
      .subscribe(res => this.pizzas = res);
    this.basketService.setShowAdress(false);
  }

  ngAfterViewInit() {
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onSelect(pizza: Pizza): void {
    this.selectedPizza = pizza;
  }

  getPizzas(): Pizza[] {
    return this.pizzas;
  }

  addToBasket(pizza: Pizza): void {
    this.service.addPizzaToBasket(pizza);
  }



}
