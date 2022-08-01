import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrabajosComponent } from './components/trabajos/trabajos.component';
import { TrabajoListComponent } from './components/trabajo-list/trabajo-list.component';
import { TrabajoHeaderComponent } from './components/trabajo-header/trabajo-header.component';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { EstudiosComponent } from './components/estudios/estudios.component';
import { EstudioListComponent } from './components/estudio-list/estudio-list.component';
import { EstudioHeaderComponent } from './components/estudio-header/estudio-header.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ProyectoListComponent } from './components/proyecto-list/proyecto-list.component';
import { ProyectoHeaderComponent } from './components/proyecto-header/proyecto-header.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { RouterModule } from '@angular/router';
import { SklillsComponent } from './components/sklills/sklills.component';
import { SklillHeaderComponent } from './components/sklill-header/sklill-header.component';
import { SkillListComponent } from './components/skill-list/skill-list.component';




@NgModule({
  declarations: [
    AppComponent,
    TrabajosComponent,
    TrabajoListComponent,
    TrabajoHeaderComponent,
    CabeceraComponent,
    EstudiosComponent,
    EstudioListComponent,
    EstudioHeaderComponent,
    ProyectosComponent,
    ProyectoListComponent,
    ProyectoHeaderComponent,
    PerfilComponent,
    SklillsComponent,
    SklillHeaderComponent,
    SkillListComponent,

  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
