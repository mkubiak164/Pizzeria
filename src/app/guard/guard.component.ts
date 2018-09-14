import {Component, EventEmitter, Injectable, OnInit, Output} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {AdminService} from '../services/admin.service';

@Component({
  selector: 'app-guard',
  templateUrl: './guard.component.html',
  styleUrls: ['./guard.component.css']
})

@Injectable()
export class GuardComponent implements OnInit, CanActivate {

  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.canActivate();
  }
  canActivate() {
    if (this.adminService.getIsAdmin()) {
      return true;
    } else {
      window.alert('nie masz dostępu do tej strony');
      return false;
    }

  }
}
