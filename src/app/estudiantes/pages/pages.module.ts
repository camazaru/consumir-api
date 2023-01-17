import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarComponent } from './agregar/agregar.component';
import { BuscarComponent } from './buscar/buscar.component';
import { HomeComponent } from './home/home.component';
import { ListadoComponent } from './listado/listado.component';
import { ModificarComponent } from './modificar/modificar.component';
import { ErrorComponent } from './error/error.component';
import { AuthModule } from 'src/app/auth/auth.module';
import estudiantesMock from '../../shared/jsonMockeado/estudiantesMock.json'
import { InterEstudiantes } from '../interfaces/estudiantes.interface';
import { MaterialModule } from '../../../app/shared/material/material.module'





@NgModule({
  declarations: [
   AgregarComponent,
  BuscarComponent,
HomeComponent,
ListadoComponent,
ModificarComponent,
ErrorComponent,

],
  imports: [
    CommonModule,
    AuthModule,
    MaterialModule
   
  ], exports:[
    AgregarComponent,
    BuscarComponent,
    ModificarComponent,
  HomeComponent,
  ListadoComponent,
  ]
})
export class PagesModule {

  
estudiantes:InterEstudiantes[] = estudiantesMock;


  

 }
