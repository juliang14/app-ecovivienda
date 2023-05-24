import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { SendMail } from '../interfaces/sendMail.interface';
import { ResponseSendMail,ResponseDto } from '../interfaces/responseSendMail.interface';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SendMailService {

    //private url = 'https://devjgomez.000webhostapp.com/servicios/ecovivienda/';
    private url='http://localhost/servicios/ecovivienda/';

    constructor(private http: HttpClient,private navCtrl: NavController) { }
  
    sendMail(form: SendMail) {
      //const url = 'https://devjgomez.000webhostapp.com/servicios/ecovivienda/';
      const url = 'http://localhost/servicios/ecovivienda/';
      // Define los datos que deseas enviar en el cuerpo de la solicitud POST
      let data = {};
        data = {
          "init": {
            "isRedirect": "JSON",
            "query": "SEND_MAIL"
          },
          "body": {
            "email": form.email,//"jstivengomez@ucompensar.edu.co",
          }
        };
      // Define las cabeceras de la solicitud POST
      const headers = new HttpHeaders({
        'Content-Type': 'application/json'
      }); 
    
      // Realiza la llamada POST a la API
      this.http.post(url, data, { headers })
      .pipe(
        tap(response => {
          console.log('Respuesta de la API:', response);
          const responseLogin: ResponseSendMail = response as ResponseSendMail;
          console.log('Estado: ',responseLogin.responseDTO.status);
          if(responseLogin.responseDTO.status =="SUCCESS"){
            //this.redirectToTab('home');
            this.openSwalFire(responseLogin.responseDTO.status, responseLogin.responseDTO.message, 'success')
          }else{
            this.openSwalFire(responseLogin.responseDTO.status, responseLogin.responseDTO.message, 'error')
          }
        }),
        catchError(this.handleError)
      ).subscribe();
        
    }
  
    private handleError(error: HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {
        // Error del lado del cliente
        console.error('Error del lado del cliente:', error.error.message);
      } else {
        // Error del lado del servidor
        console.error('Error del lado del servidor:', error.status);
      }
      this.openSwalFire('Error', error.error.message, 'error')
      // Devuelve un mensaje genérico de error
      return throwError('Ha ocurrido un error en la solicitud.');
    }
  
    redirectToTab(tabName: string) {
      this.navCtrl.navigateRoot(tabName);
    }
  
    openSwalFire(title: string, message: string, icon: string){
      if (message ==="SUCCESS") {
        Swal.fire({
          title: title,
          text: message,
          icon: 'success',
          confirmButtonText: 'Ok',
          position: 'center',
          showCloseButton: true,
          showConfirmButton: false
        });
      } else {
        Swal.fire({
          title: title,
          text: message,
          icon: 'error',
          confirmButtonText: 'Ok',
          position: 'center',
          showCloseButton: true,
          showConfirmButton: false,
          timer: 3000
        });
      }
  }
}
