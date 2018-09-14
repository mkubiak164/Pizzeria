import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-guard',
  templateUrl: './guard.component.html',
  styleUrls: ['./guard.component.css']
})
export class GuardComponent implements OnInit, CanActivate {

  // public canActivate: boolean;

  // @Output()
  // change: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
    // this.canActivate = true;
    // true zeby dzialalo, false nie dziala
  }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }

  // canActivate() {
  //   // return this.change;
  //   return true;
  // }

  // test(b) {
  //   this.change.emit(b);
  // }

  // setCanActivate(ca: boolean) {
  //   this.canActivate = ca;
  // }


}
