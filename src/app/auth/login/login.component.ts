import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { throwError } from 'rxjs';
import { AuthService} from '../shared/auth.service';
import { LoginRequestPayload } from './login.request.payload';
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginForm: FormGroup;
  loginRequestPayload: LoginRequestPayload;
  isError:boolean;
  registerSuccessMessage:string;

  constructor(private authService:AuthService,private router: Router,
    private toastr: ToastrService,private activatedRoute: ActivatedRoute){
    this.loginRequestPayload = {
      username:'',
      password:''
    };
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
    username: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
    });

    this.activatedRoute.queryParams
    .subscribe(params => {
      if(params['registered'] !==  undefined && params['registered'] === 'true'){
        this.toastr.success('Signup Successful');
        this.registerSuccessMessage = 'Please Check your inbox for activation mail'
        + 'activate your account before login';
        this.toastr.success(this.registerSuccessMessage);
      }
    });
  }
  login(){
    this.loginRequestPayload.username = this.loginForm.get('username')?.value;
    this.loginRequestPayload.password = this.loginForm.get('password')?.value;

    this.authService.login(this.loginRequestPayload).subscribe(data => {
        this.isError = false;
        this.toastr.success('Login Successful');
        this.router.navigateByUrl('');
    },
      error => {
        this.isError = true;
        throwError(error);
      });
  }
}
