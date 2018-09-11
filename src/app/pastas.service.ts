import { Injectable } from '@angular/core';
import {Pasta} from './pasta';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PastasService {

  basket: Pasta[] = [];

  constructor(
    readonly http: HttpClient
  ) { }

  getPastas(): Observable<Pasta[]> {
    return this.http.get<Pasta[]>('http://localhost:3000/pastas');
  }

  getPasta(id: number): Observable<Pasta> {
    return this.http.get<Pasta>('api/pastas/${id}');
  }

  addPastaToBasket(pasta: Pasta): void {
    this.basket.push(pasta);
  }

  getPastasInBasket(): Pasta[] {
    return this.basket;
  }

}
