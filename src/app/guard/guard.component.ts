import {Component, EventEmitter, Injectable, OnInit, Output} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {AdminService} from '../admin.service';

@Component({
  selector: 'app-guard',
  templateUrl: './guard.component.html',
  styleUrls: ['./guard.component.css']
})

@Injectable()
export class GuardComponent implements OnInit, CanActivate {

  // public canActivate: boolean;

  // @Output()
  // change: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.canActivate();
    // true zeby dzialalo, false nie dziala
  }

  // canActivate(route: ActivatedRouteSnapshot,
  //             state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
  //   return true;
  // }

  canActivate() {
    if (this.adminService.getIsAdmin()) {
      return true;
    } else {
      window.alert('nie masz dostępu do tej strony');
      return false;
    }

    // return this.change;
    // console.log('GuardComponent');
    // return true;
  }

  // setCanActivate(ca: boolean) {
  //   this.canActivate = ca;
  // }


}
