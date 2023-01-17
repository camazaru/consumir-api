import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegistroComponent,

  ],
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule 
    
    
  ],
  exports:[
    LoginComponent,
    RegistroComponent

  ]
})
export class AuthModule { }
