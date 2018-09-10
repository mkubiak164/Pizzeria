import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Pizza} from './pizza';

@Injectable({
  providedIn: 'root'
})
export class PizzasService {

  constructor(
    readonly http: HttpClient
  ) { }

  getPizzas(): Observable<Pizza[]> {
    return this.http.get<Pizza[]>('http://localhost:3000/pizzas');
  }

  getPizza(id: number): Observable<Pizza> {
    return this.http.get<Pizza>('api/pizzas/${id}');
  }



}
