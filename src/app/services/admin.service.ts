import { Injectable } from '@angular/core';

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
