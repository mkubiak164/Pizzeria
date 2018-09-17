import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketComponent } from './basket.component';
import {Pizza} from '../models/pizza';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {PizzasService} from '../pizzas/pizzas.service';

describe('BasketComponent', () => {
  let component: BasketComponent;
  let fixture: ComponentFixture<BasketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasketComponent ],
      providers: [ HttpClient, HttpHandler]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return 2 pizzas from basket', () => {
    const pizzaService = TestBed.get(PizzasService);
    const pizzaServiceSpy = spyOn(pizzaService, 'getPizzasInBasket');
    const pizza: Pizza[] = [new Pizza(), new Pizza()];
    pizzaServiceSpy.and.returnValues(pizza);
    const pizzasInBasket = component.getPizzasInBasket();
    expect(pizzasInBasket.length).toEqual(2);
  });

});
