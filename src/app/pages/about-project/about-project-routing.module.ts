import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutProjectPage } from './about-project.page';

const routes: Routes = [
  {
    path: '',
    component: AboutProjectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutProjectPageRoutingModule {}
