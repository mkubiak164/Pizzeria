import {TestBed, inject, async, ComponentFixture} from '@angular/core/testing';

import { BasketService } from './basket.service';
import {ActivatedRoute} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {BasketComponent} from './basket.component';

class ActivatedRouteMock {
  snapshot: {
    paramMap: {
      'id': 1
    }
  };
}

describe('BasketService', () => {
  let component: BasketComponent;
  let fixture: ComponentFixture<BasketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: ActivatedRoute, useClass: ActivatedRouteMock},
        BasketService,
        HttpClient,
        HttpHandler,
        BasketComponent
      ],
      imports: [RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasketComponent);
    component = fixture.componentInstance;
    fixture.autoDetectChanges();
  });

  it('should be created', inject([BasketService], (service: BasketService) => {
    expect(service).toBeTruthy();
  }));



});
