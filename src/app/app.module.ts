import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module'
import { HomeModule } from './home/home.module';

import { AppComponent } from './app.component';


@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule,HomeModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
