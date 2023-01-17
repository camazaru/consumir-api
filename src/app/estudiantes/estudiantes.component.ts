import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  
})
export class EstudiantesComponent implements OnInit {

  userAdmin: any = [{"usuario": "admin"}, {"password": "admin"}]

  userList: any = [];

  constructor() { }

  ngOnInit(): void {}

 

}
