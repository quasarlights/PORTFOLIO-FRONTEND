import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Skill } from 'src/app/models/Skill';

@Component({
  selector: 'app-sklill-header',
  templateUrl: './sklill-header.component.html',
  styleUrls: ['./sklill-header.component.css']
})
export class SklillHeaderComponent implements OnInit {

  @Input()
  skill!: Skill
  @Input()
  loading!: boolean;

  @Output() onGuardarSkill: EventEmitter<Skill> = new EventEmitter();

  
  name_skill: string ="";
  porcentaje: string = "";


  constructor( ) { }

  ngOnInit(): void {
  }


  onSubmit() {
    if (!this.name_skill) {
      alert('Por favor, añade el nombre del Skill');
      return;
    }
    const newSkill = {
      name_skill: this.name_skill,
      porcentaje: this.porcentaje

    }

    this.onGuardarSkill.emit(newSkill);

    this.name_skill = '';
    this.porcentaje = '';

  }
}