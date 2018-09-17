import { Component, OnInit } from '@angular/core';
import {PizzasService} from '../pizzas/pizzas.service';
import {Pizza} from '../models/pizza';
import {Observable, Subscription} from 'rxjs';
import {Pasta} from '../models/pasta';
import {PastasService} from '../pastas/pastas.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AdminService} from '../services/admin.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  pizzas: Pizza[] = [];
  pastas: Pasta[] = [];
  sub: Subscription;
  pizza: Pizza;
  pasta: Pasta;

  constructor(private pizzaService: PizzasService,
              private pastaService: PastasService,
              private http: HttpClient,
              private adminService: AdminService,
              private router: Router
              ) { }

  ngOnInit() {
    this.sub = this.pizzaService.getPizzas()
      .subscribe(res => this.pizzas = res);
    this.sub = this.pastaService.getPastas()
      .subscribe(res => this.pastas = res);
    this.adminService.getIsAdmin();
  }


  getPizzas(): Pizza[] {
    return this.pizzas;
  }

  getPastas(): Pasta[] {
    return this.pastas;
  }

  pizzaAvailabilityChanged(pizza: Pizza): void {
    const url = 'http://localhost:3000/pizzas/' + pizza.id;
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');

    pizza.isAvailable = !pizza.isAvailable;

    this.http.put(url, pizza, {
      headers: headers
    }).subscribe(
      res => alert('Zmieniono dostepnosc')
    );
  }

  pastaAvailabilityChanged(pasta: Pasta): void {
    const url = 'http://localhost:3000/pastas/' + pasta.id;
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');

    pasta.isAvailable = !pasta.isAvailable;

    this.http.put(url, pasta, {
      headers: headers
    }).subscribe(
      res => alert('Zmieniono dostepnosc')
    );
  }

  onSelect(pizza: Pizza): void {
    this.pizza = pizza;
    this.router.navigate(['/pizzas', pizza.id]);
  }

  onSelect2(pasta: Pasta): void {
    this.pasta = pasta;
    this.router.navigate(['/pastas', pasta.id]);
  }

}
