import { Component, OnInit } from '@angular/core';
import estudiantesMock from '../../../shared/jsonMockeado/estudiantesMock.json'
import { InterEstudiantes } from '../../interfaces/estudiantes.interface';
import { ApinuevaService } from '../../services/apinueva.service';



@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  userList: any;




estudiantes: any = estudiantesMock



  constructor(private apinuevaService: ApinuevaService ) { 

    
  }

  ngOnInit(): void {
    this.apinuevaService.getUsers()
    .subscribe((response: any) => this.userList = response)
  
  }

  
  

}
