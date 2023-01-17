import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import { LateralComponent } from './components/lateral/lateral.component';
import { HeadComponent } from './components/head/head.component';
import { MaterialModule } from '../shared/material/material.module';


@NgModule({
  declarations: [
    BodyComponent,
    FooterComponent,
    LateralComponent,
    HeadComponent
    
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MaterialModule

   
  ],
  exports: [
 BodyComponent,
FooterComponent,
LateralComponent,
HeadComponent

  ]
})
export class LayoutModule { }
