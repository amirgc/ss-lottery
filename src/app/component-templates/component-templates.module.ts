import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { compTempRoutes } from './com-temp.routes'

import { LifeCycleHooksComponent } from './';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LifeCycleHooksComponent]
})
export class ComponentTemplatesModule { }