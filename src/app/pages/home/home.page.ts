import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  btnBellavista(){
    const sectionBellavista = document.getElementById("sectionBellavista");
    const sectionDetalle    = document.getElementById("sectionDetalle");
    console.log('btnBellavista')
    if (sectionBellavista && sectionDetalle) {
      sectionBellavista.classList.remove("off");      
      sectionDetalle.classList.add("off");   
    }
// Remueve una clase específica
  }
  btnDetalle(){
    const sectionBellavista = document.getElementById("sectionBellavista");
    const sectionDetalle    = document.getElementById("sectionDetalle");
    if (sectionBellavista && sectionDetalle) {
      sectionBellavista.classList.add("off");      
      sectionDetalle.classList.remove("off");   
    }
  }
}
