import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { HomePageRoutingModule } from '../home/home-routing.module';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { NavUserComponent } from './nav-user/nav-user.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavUserComponent
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    NavUserComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ]
})
export class LayoutsModule { }
