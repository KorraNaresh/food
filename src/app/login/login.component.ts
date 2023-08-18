import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { Login } from './login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: Login = { phoneNumber: '', password: '' };
  getData: any;
  loginForm: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      phoneNumber: [null, Validators.required],
      password: [null, Validators.required]
    });
  }
  onSubmit() {
    const loginValue = this.loginForm.value;
    console.log(loginValue);
  
    const requestBody = {
      phoneNumber: this.loginForm.get('phoneNumber')?.value,
      password: this.loginForm.get('password')?.value
    };
  
    this.loginService.getUserData(requestBody).subscribe(
      response => {
        const role = response; // Assuming the response contains the role
        this.router.navigate(['/users-home']);
      }
    );
  }
}  