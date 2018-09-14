import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {GuardComponent} from '../guard/guard.component';
import {Subscription} from 'rxjs';
import {AdminService} from '../admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  sub: Subscription;
  loginData = new FormGroup({
    login: new FormControl(),
    password: new FormControl(),
  });

  constructor(private fb: FormBuilder,
              private http: HttpClient,
              private router: Router,
              private guard: GuardComponent,
              private adminService: AdminService) { }

  onSubmit() {
    const data = this.loginData.value;

    this.sub = this.http.get('http://localhost:3000/users/1').subscribe(
      res => {
        if (res.login === data.login && res.password === data.password) {
          this.adminService.setIsAdmin(true);
          // @ts-ignore
          // this.guard.canActivate = true;
          // this.guard.test(true);
          // this.guard.setCanActivate(true);
          this.router.navigateByUrl('/');
        } else {
          alert('zle dane!');
        }
      }
    );

  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
