import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewslettersPage } from './newsletters.page';

const routes: Routes = [
  {
    path: '',
    component: NewslettersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewslettersPageRoutingModule {}
