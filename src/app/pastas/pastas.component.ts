import {Component, OnDestroy, OnInit} from '@angular/core';
import {Pasta} from '../models/pasta';
import {PastasService} from './pastas.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-pastas',
  templateUrl: './pastas.component.html',
  styleUrls: ['./pastas.component.css']
})
export class PastasComponent implements OnInit, OnDestroy {

  selectedPasta: Pasta;
  pastas: Pasta[] = [];
  sub: Subscription;

  constructor(private readonly service: PastasService) {
  }

  ngOnInit(): void {
    this.sub = this.service.getPastas()
      .subscribe(res => this.pastas = res);
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onSelect(pasta: Pasta): void {
    this.selectedPasta = pasta;
  }
  getPastas(): Pasta[] {
    return this.pastas;
  }

  addToBasket(pasta: Pasta): void {
    this.service.addPastaToBasket(pasta);
  }

}
