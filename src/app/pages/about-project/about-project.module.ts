import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LayoutsModule } from '../../layouts/layouts.module';
import { IonicModule } from '@ionic/angular';

import { AboutProjectPageRoutingModule } from './about-project-routing.module';

import { AboutProjectPage } from './about-project.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AboutProjectPageRoutingModule,
    LayoutsModule
  ],
  declarations: [AboutProjectPage]
})
export class AboutProjectPageModule {}
