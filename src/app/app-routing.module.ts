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
  ...canActivate(() => redirectUnauthorizedTo(['/register'])) },
  {path: 'listado', component: ListadoComponent },
  {path: 'buscar', component: BuscarComponent },
  {path: 'agregar', component: AgregarComponent },
  {path: 'modificar', component: ModificarComponent },
  {path: 'error', component: ErrorComponent },
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: '', pathMatch: 'full', redirectTo: '/inicio' },
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
