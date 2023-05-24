import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-newsletters',
  templateUrl: './newsletters.page.html',
  styleUrls: ['./newsletters.page.scss'],
})
export class NewslettersPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  viewDocument(attr:string, nameItem:string){
    /*const tittleDocument = document.getElementsByClassName("tittle-document");
    const embed  = document.getElementById("embed");

    embed.classList.add("off"); 
    for (let i = 0; i < tittleDocument.length; i++) {
      const element = tittleDocument[i];
      // Remueve la clase deseada
      element.classList.remove("off");
    }   */
    
        $('embed').addClass('off');
        $('.tittle-document').removeClass('off');
        $('.tittle-document').html(attr);
        $('#'+nameItem).removeClass('off');
  }
}
