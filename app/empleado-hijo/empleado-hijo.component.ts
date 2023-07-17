import { Component, Input } from '@angular/core';
import { Empleado } from '../empleado';

@Component({
  selector: 'app-empleado-hijo',
  templateUrl: './empleado-hijo.component.html',
  styleUrls: ['./empleado-hijo.component.css']
})
export class EmpleadoHijoComponent {

 

  @Input() empleadoDeLista:Empleado;

  @Input() Indice:number;

  arrayCaracteristicas = [' '];

  agregarcaracteristica(nuevacaracteristica: string) {
    this.arrayCaracteristicas.push(nuevacaracteristica); 
    console.log("caracteristica agregada")
    console.log(this.arrayCaracteristicas)
  }

}
