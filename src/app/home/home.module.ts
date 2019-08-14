import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CustomMaterialModule} from './../custom-material.module';

import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    CustomMaterialModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }