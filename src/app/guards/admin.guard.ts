import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AdminService } from '../services/admin.service';

@Injectable()
export class AdminGuard implements CanActivate {

  constructor(private adminService: AdminService) { }

  canActivate() {
    if (this.adminService.getIsAdmin()) {
      return true;
    } else {
      window.alert('nie masz dostępu do tej strony');
      return false;
    }
  }
}
