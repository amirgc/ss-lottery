import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component'
import { HomeComponent } from './home';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'comp-temp',
    loadChildren: () => import('./component-templates/component-templates.module').then(mod => mod.ComponentTemplatesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }