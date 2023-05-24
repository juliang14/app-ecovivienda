import { Component, OnInit } from '@angular/core';
import { FormControl,Validators, FormGroup } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Login } from '../../interfaces/login.interface';
import Swal from 'sweetalert2';
import * as $ from 'jquery';


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

  cambiarLogin(tipo:string){
    $('.header-form-login .nav-link').removeClass('active');
    $('#'+tipo).addClass('active');
    if (tipo=='correo') {
        $('.content-login1').addClass('off');
        $('.content-login2').removeClass('off');
        $('#email').attr('required');
        $('#documentType').removeAttr('required');
        $('#document').removeAttr('required');
        $('#document').val('');
    }else{
        $('.content-login1').removeClass('off');
        $('.content-login2').addClass('off');
        $('#email').removeAttr('required');
        $('#email').val('');
        $('#documentType').attr('required');
        $('#document').attr('required');
    }
  }
  verClave(){
    if($('.btn-password i').hasClass('fa-solid fa-eye')){
      $('.btn-password i').removeClass();
      $('.btn-password i').addClass('fa-solid fa-eye-slash');
      $('#password').attr('type','text');
    }else{
      $('.btn-password i').removeClass();
      $('.btn-password i').addClass('fa-solid fa-eye');
      $('#password').attr('type','password');
    }
  }
}
