import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module'
import { HomeModule } from './home/home.module';

import { AppComponent } from './app.component';
import {CustomMaterialModule} from './custom-material.module'

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule,CustomMaterialModule,HomeModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
