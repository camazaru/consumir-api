import { Component, OnInit } from '@angular/core';
import estudiantesMock from '../../../shared/jsonMockeado/estudiantesMock.json'
import { InterEstudiantes } from '../../interfaces/estudiantes.interface';



@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  imgprueba:string="../../../shared/estudiantes/paisaje.jpg"


estudiantes: any = estudiantesMock



  constructor() { 

    
  }

  ngOnInit(): void {
  
  }

  
  

}
