import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewslettersPageRoutingModule } from './newsletters-routing.module';
import { LayoutsModule } from '../../layouts/layouts.module';
import { NewslettersPage } from './newsletters.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewslettersPageRoutingModule,
    LayoutsModule
  ],
  declarations: [NewslettersPage]
})
export class NewslettersPageModule {}
