import { NgModule } from '@angular/core';
import { RouterModule, Routes,  } from '@angular/router';
import { HomeComponent } from './estudiantes/pages/home/home.component';
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
