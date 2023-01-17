import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {map } from 'rxjs/operators'
import { InterEstudiantes } from 'src/app/estudiantes/interfaces/estudiantes.interface';

@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {


  constructor() { }
}
