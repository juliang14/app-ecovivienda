import { Component, OnInit,ViewChild } from '@angular/core';
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
  optionLogin(opcion:string){
    //const elementoJQuery = $('#modalCenter') as any;
    const elemento = document.getElementById('truco');
    
    $('.modal-header .modal-title').html('');
    $('.control-modal').addClass('off');
    if (opcion === 'sendPassword') {
        $('.modal-header .modal-title').html('Recuperar contraseña');
        $('.modal-getEmail').removeClass('off');
    }else if(opcion === 'TyC'){
        $('.modal-header .modal-title').html('Terminos y condiciones');
        $('.modal-TyC').removeClass('off');
    }
    if (elemento) {
      elemento.click();  
      $('.modal-backdrop.fade.show').removeClass('modal-backdrop fade show');
    }
    
    //elementoJQuery.modal();
    //$('#modalCenter').modal('show');
  }

}
