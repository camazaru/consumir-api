import { NgModule } from '@angular/core';
import { RouterModule, Routes,  } from '@angular/router';
import { AgregarComponent } from './estudiantes/pages/agregar/agregar.component';
import { BuscarComponent } from './estudiantes/pages/buscar/buscar.component';
import { ErrorComponent } from './estudiantes/pages/error/error.component';
import { HomeComponent } from './estudiantes/pages/home/home.component';
import { ListadoComponent } from './estudiantes/pages/listado/listado.component';
import { ModificarComponent } from './estudiantes/pages/modificar/modificar.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistroComponent } from './auth/registro/registro.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';



const routes: Routes = [
  {path: 'inicio', component: HomeComponent,
  ...canActivate(() => redirectUnauthorizedTo(['/login'])) },

   {path: 'login', component: LoginComponent},

  {path: 'registro', component: RegistroComponent},





  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
