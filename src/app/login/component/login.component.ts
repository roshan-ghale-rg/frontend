import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {LoginService} from '../service/login.service';
import {ToastrService} from 'ngx-toastr';
import {ProductDetails} from '../../feature/ProfitAnalysis-management/product-details/model/ProductDetails';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, public router: Router, private loginService: LoginService, private toastr: ToastrService) { }
// convenience getter for easy access to form fields

  loginForm: FormGroup;

  sellers: Array<ProductDetails>;
  rows: Array<ProductDetails>;
  isLogin: false;

  submitted = false;


  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

// convenience getter for easy access to form fields
  get login() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    const checkUser: any = {
      email: this.loginForm.get('email').value,
      password: this.loginForm.get('password').value
    };

    const pwd = btoa(checkUser.password);
    checkUser.password = pwd;

    this.loginService.checkUser(checkUser).subscribe(
      res => {
        if (res.ok && res.body != false) {
          const user = JSON.stringify(res.body);
          localStorage.setItem('currentUser', user);
          this.toastr.success('Login Successfull', 'Info!');
          this.router.navigate(['/home']);
        } else {
          this.loginForm.controls['password'].setErrors({'incorrect': true});
        }


      },
      err => {
        this.router.navigate(['/login']);
      }
    );


  }



  registerUser() {

    this.router.navigate(['/register']);

  }




}
