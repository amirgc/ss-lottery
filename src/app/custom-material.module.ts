import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
   MatSidenavModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatCardModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule, 
    BrowserAnimationsModule, 
    MatButtonModule, 
    MatSidenavModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatCardModule
  ],
  exports: [MatButtonModule, 
    MatSidenavModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatCardModule
    ], 
       
  declarations: []
})
export class CustomMaterialModule { }