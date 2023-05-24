import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LayoutsModule } from '../../layouts/layouts.module';
import { IonicModule } from '@ionic/angular';

import { WorkProgressPageRoutingModule } from './work-progress-routing.module';

import { WorkProgressPage } from './work-progress.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorkProgressPageRoutingModule,
    LayoutsModule
  ],
  declarations: [WorkProgressPage]
})
export class WorkProgressPageModule {}
