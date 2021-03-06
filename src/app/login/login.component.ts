import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {AdminGuard} from '../guards/admin.guard';
import {Subscription} from 'rxjs';
import {AdminService} from '../services/admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  sub: Subscription;
  loginData = new FormGroup({
    login: new FormControl(),
    password: new FormControl(),
  });

  constructor(private fb: FormBuilder,
              private http: HttpClient,
              private router: Router,
              private guard: AdminGuard,
              private adminService: AdminService) {}

  onSubmit() {
    const data = this.loginData.value;

    this.sub = this.http.get('http://localhost:3000/users/1').subscribe(
      res => {
        if (res['login'] === data.login && res['password'] === data.password) {
          this.adminService.setIsAdmin(true);
          this.router.navigateByUrl('/');
          alert('Witaj admin!');
        } else {
          alert('złe dane!');
        }
      }
    );
  }
}
