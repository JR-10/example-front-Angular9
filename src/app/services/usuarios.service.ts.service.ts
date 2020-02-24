import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { IUsuarios } from '../models/usuarios.model';
import { environment } from '../../environments/environment';


// tipo de datos de las respuestas
type EntityResponseType = HttpResponse<IUsuarios>;
type EntityArrayResponseType = HttpResponse<IUsuarios[]>
@Injectable({
  providedIn: 'root'
})
//export class Usuarios.Service.TsService {
export class UsuariosService {

  // Urls de los servicios
  private urlGetAllUsuarios = environment.urlAPI + 'usuarios'
  usuariosData: IUsuarios[]; // data usuarios respuesta 

  constructor(private http: HttpClient ) {}

  getAllUsuarios(): Observable<any>{
    return this.http.get<IUsuarios[]>(this.urlGetAllUsuarios, {observe:'response'});
  }
}
