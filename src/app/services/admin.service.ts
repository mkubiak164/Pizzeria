import { Injectable } from '@angular/core';
import {GuardComponent} from '../guard/guard.component';

@Injectable({
  providedIn: 'root'
})

export class AdminService {

  isAdmin = false;

  constructor() { }

  setIsAdmin(is: boolean) {
    this.isAdmin = is;
  }

  getIsAdmin(): boolean {
    return this.isAdmin;
  }
}
