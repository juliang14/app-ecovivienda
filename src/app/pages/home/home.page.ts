import { Component, OnInit } from '@angular/core';

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
    /*$('.section-apto').addClass('off');
    $('.section-carrousel').removeClass('off');
    $(document).scrollTop($(document).height());*/
  }
}
