import {TestBed, inject, async, ComponentFixture} from '@angular/core/testing';

import { BasketService } from './basket.service';
import {ActivatedRoute} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {PizzasService} from '../pizzas/pizzas.service';
import {Pizza} from '../models/pizza';
import {PastasService} from '../pastas/pastas.service';
import {Pasta} from '../models/pasta';

class ActivatedRouteMock {
  snapshot: {
    paramMap: {
      'id': 1
    }
  };
}

describe('BasketService', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: ActivatedRoute, useClass: ActivatedRouteMock},
        BasketService,
        HttpClient,
        HttpHandler,
        PizzasService
      ],
      imports: [RouterTestingModule]
    });
  }));

  beforeEach(() => {
  });

  it('should be created', inject([BasketService], (service: BasketService) => {
    expect(service).toBeTruthy();
  }));

  it('should call the PizzaService', () => {
    const basketService = TestBed.get(BasketService);
    const pizzaService = TestBed.get(PizzasService);
    const pizzaServiceSpy = spyOn(pizzaService, 'getPizzasInBasket');
    const pizza: Pizza[] = [];
    pizzaServiceSpy.and.returnValues(pizza);
    basketService.countBasket();
    expect(pizzaServiceSpy).toHaveBeenCalled();
  });

  it('should call the PastaService', () => {
    const basketService = TestBed.get(BasketService);
    const pastaService = TestBed.get(PastasService);
    const pastaServiceSpy = spyOn(pastaService, 'getPastasInBasket');
    const pasta: Pasta[] = [];
    pastaServiceSpy.and.returnValues(pasta);
    basketService.countBasket();
    expect(pastaServiceSpy).toHaveBeenCalled();
  });

  it('should return 0', () => {
    const basketService = TestBed.get(BasketService);
    const pastaService = TestBed.get(PastasService);
    const pastaServiceSpy = spyOn(pastaService, 'getPastasInBasket');
    const pasta: Pasta[] = [];
    // const pasta: Pasta[] = [new Pasta(), new Pasta(), new Pasta()];
    pastaServiceSpy.and.returnValues(pasta);
    const count = basketService.countBasket();
    expect(count).toEqual(0);
  });

  it('should return 3', () => {
    const basketService = TestBed.get(BasketService);
    const pastaService = TestBed.get(PastasService);
    const pastaServiceSpy = spyOn(pastaService, 'getPastasInBasket');
    const pasta: Pasta[] = [new Pasta(), new Pasta(), new Pasta()];
    pastaServiceSpy.and.returnValues(pasta);
    const count = basketService.countBasket();
    expect(count).toEqual(3);
  });


});

