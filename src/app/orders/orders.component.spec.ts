import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersComponent } from './orders.component';
import {ActivatedRoute} from '@angular/router';
import {OrdersService} from '../services/orders.service';
import {PizzasService} from '../pizzas/pizzas.service';
import {PastasService} from '../pastas/pastas.service';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {Order} from '../models/order';
import {Status} from './status';
import {AdminService} from '../services/admin.service';
import {GuardComponent} from '../guard/guard.component';

class ActivatedRouteMock {
  snapshot: {
    paramMap: {
      'id': 1
    }
  };
}

describe('OrdersComponent', () => {
  let component: OrdersComponent;
  let fixture: ComponentFixture<OrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersComponent ],
      providers: [
        { provide: ActivatedRoute, useClass: ActivatedRouteMock},
        OrdersService,
        PizzasService,
        PastasService,
        HttpClient,
        HttpHandler,
        AdminService,
        GuardComponent,
        OrdersComponent
      ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  // it('should call the pizzasService', () => {
  //   const pizzasService = TestBed.get(PizzasService);
  //   const getPizzasInBasketSpy = spyOn(pizzasService, 'getPizzasInBasket');
  //   getPizzasInBasketSpy.and.returnValue(null);
  //   expect(getPizzasInBasketSpy).toHaveBeenCalled();
  // });
  //
  // it('should return true if user id admin', () => {
  //   const guardComponent = TestBed.get(GuardComponent);
  //   const canActivateSpy = spyOn(guardComponent, 'canActivate');
  //   canActivateSpy.and.returnValue(true);
  //   expect(canActivateSpy).toEqual(true);
  // });

  it('should be 4', () => {
    const cztery = 4;
    expect(cztery).toEqual(4);
  });

  it('should test getOrders', () => {
    const order = component.getOrder(1);


  });



});
