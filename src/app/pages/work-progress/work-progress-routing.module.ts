import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkProgressPage } from './work-progress.page';

const routes: Routes = [
  {
    path: '',
    component: WorkProgressPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkProgressPageRoutingModule {}
