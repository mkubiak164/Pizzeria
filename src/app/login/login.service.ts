import {Injectable, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {AdminGuard} from '../guards/admin.guard';
import {AdminService} from '../services/admin.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService implements OnDestroy{

  sub: Subscription;
  loginData = new FormGroup({
    login: new FormControl(),
    password: new FormControl(),
  });

  constructor(private fb: FormBuilder,
              private http: HttpClient,
              private router: Router,
              private guard: AdminGuard,
              private adminService: AdminService) { }
  logout() {
    this.adminService.setIsAdmin(false);
    this.router.navigateByUrl('/');
    alert('wylogowano!');
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
