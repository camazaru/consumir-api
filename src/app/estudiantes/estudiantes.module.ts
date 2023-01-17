import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesModule } from './pages/pages.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
     
  ],
  imports: [
    CommonModule,
    PagesModule,
    HttpClientModule
  ],
  exports: [
     ]
})
export class EstudiantesModule { 

  
}
