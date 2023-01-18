import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { AgregarComponent } from '../estudiantes/pages/agregar/agregar.component';
import { BuscarComponent } from '../estudiantes/pages/buscar/buscar.component';

import { ListadoComponent } from '../estudiantes/pages/listado/listado.component';
import { ModificarComponent } from '../estudiantes/pages/modificar/modificar.component';
import { LoginComponent } from '../auth/login/login.component';
import { RegistroComponent } from '../auth/registro/registro.component';

const routes: Routes = [
  {
    path:'',
    children: [
   { path: 'listado', component: ListadoComponent,
  ...canActivate(() => redirectUnauthorizedTo(['/listado'])) },
  {path: 'buscar', component: BuscarComponent,
  ...canActivate(() => redirectUnauthorizedTo(['/buscar'])) },
  {path: 'agregar', component: AgregarComponent,
  ...canActivate(() => redirectUnauthorizedTo(['/agregar'])) },
  {path: 'modificar', component: ModificarComponent,
  ...canActivate(() => redirectUnauthorizedTo(['/modificar']))  },
  {path: '**', component: LoginComponent,
  ...canActivate(() => redirectUnauthorizedTo(['/login'])) },
  
]}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
