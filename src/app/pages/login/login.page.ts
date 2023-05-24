import { Component, OnInit } from '@angular/core';
import { FormControl,Validators, FormGroup } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Login } from '../../interfaces/login.interface';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  login = new FormGroup({
    documentType : new FormControl(''),
    document : new FormControl(''),
    email : new FormControl(''),
    password : new FormControl('',Validators.required)
  })

  constructor(private loginService:LoginService){
  }

  ngOnInit() : void{
  }

  onLogin(login: any){
    console.log(login)
    this.loginService.login(login);
  }
}
