import { Component, OnInit, Input } from '@angular/core';
import { Pizza} from '../../models/pizza';
import {ActivatedRoute, Router} from '@angular/router';
import {PizzasService} from '../pizzas.service';

@Component({
  selector: 'app-pizza-detail',
  templateUrl: './pizza-detail.component.html',
  styleUrls: ['./pizza-detail.component.css']
})
export class PizzaDetailComponent implements OnInit {

  @Input() pizza: Pizza;

  constructor(
    private route: ActivatedRoute,
    private pizzaService: PizzasService
  ) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pizzaService.getPizza(id).subscribe(
      res => this.pizza = res
    );
  }

}
