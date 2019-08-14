import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
   MatSidenavModule,
  MatCheckboxModule,
  MatToolbarModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule, 
    BrowserAnimationsModule, 
    MatButtonModule, 
    MatSidenavModule,
    MatCheckboxModule,
    MatToolbarModule
  ],
  exports: [MatButtonModule, 
    MatSidenavModule,
    MatCheckboxModule,
    MatToolbarModule],    
  declarations: []
})
export class CustomMaterialModule { }