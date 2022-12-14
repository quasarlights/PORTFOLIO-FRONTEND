import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Perfil } from '../models/Perfil';


const htttOptions = {
  headers:new HttpHeaders({
    'Content-Type': 'application/json'
  }) 
}

@Injectable({
  providedIn: 'root'
})

export class PortfolioService {

private url:string = 'https://thawing-cove-47449.herokuapp.com/api/person'
public loading:boolean = false;

constructor(private http: HttpClient) { }

// Perfil
getPerfil(): Observable<Perfil[]> {
  const urlAll = `${this.url}/all`;
  return this.http.get<Perfil[]>(urlAll)
}
//Actualizar Perfil
editPerfil(perfil: Perfil, id:any): Observable<Perfil>{
  const url = `${this.url}/${id}`;
  return this.http.put<Perfil>(url, perfil)
}


}
