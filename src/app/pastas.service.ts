import { Injectable } from '@angular/core';
import {Pasta} from './pasta';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PastasService {

  constructor(
    readonly http: HttpClient
  ) { }

  getPastas(): Observable<Pasta[]> {
    return this.http.get<Pasta[]>('http://localhost:3000/pastas');
  }

  getPasta(id: number): Observable<Pasta> {
    return this.http.get<Pasta>('api/pastas/${id}');
  }

}
