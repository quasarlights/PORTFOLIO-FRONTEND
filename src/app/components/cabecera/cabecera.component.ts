
import { Component,  EventEmitter,  OnInit, Output } from '@angular/core';
import { AutenticacionService } from 'src/app/services/autenticacion.service';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})


export class CabeceraComponent implements OnInit {
  salir = false;
  user:any = {};
  public loading:boolean = false;

  constructor(private authService:AutenticacionService) {}

  ngOnInit(): void {

  }


  login(){

    let formulario:any= document.getElementById("login");
    let formularioValido:boolean= formulario.reportValidity();
    if(formularioValido)
    {
     this.authService
      .loginUser(this.user)
      .subscribe( data => this.inciarSesion(data)
     )

    }
  }

    inciarSesion(resultado:any){
      if(resultado){
        this.loading = this.authService.setLogin(true)
        localStorage.setItem("usuario", JSON.stringify(resultado));
        console.log(JSON.stringify(resultado))

      } else {
        window.alert("Usuario o clave incorrecta");
        
      }
    }

    logout(){
      this.loading = this.authService.setLogin(false)
      console.log(this.authService.getLogin())

    }

}

