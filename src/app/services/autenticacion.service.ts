import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/User';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class AutenticacionService {

private urlAuth:string = 'https://thawing-cove-47449.herokuapp.com/ath'

constructor(private http: HttpClient){
  
}

public logueado = false;
loginUser(usuario:any){
  var httpOptions = {
    headers:new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  return this.http.post<any>("https://thawing-cove-47449.herokuapp.com/usuario/login",usuario,httpOptions)
}

setLogin(login: boolean){
  return this.logueado = login;
}

getLogin(){
  return this.logueado;
}

}
