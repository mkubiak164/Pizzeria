import { Injectable } from '@angular/core';
import {BasketService} from '../basket/basket.service';
import {AdressComponent} from '../adress/adress.component';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdressService {

  constructor(private http: HttpClient, private basketService: BasketService) { }

  save(addresData: any): void {
    this.basketService.addBasketToOrder();
    const order = this.basketService.getOrder();
    order.adress = addresData;

    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');

    const res = this.http.post('http://localhost:3000/orders', order, {
      headers: headers,
    }).subscribe(
      resp => console.log('hurra udalo sie! ' + resp)
    );

    alert('Zamowienie przyjete!');
  }

}
