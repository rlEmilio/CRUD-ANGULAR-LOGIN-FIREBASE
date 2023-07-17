import { Injectable } from '@angular/core';
import { Empleado } from './empleado';
import { DataServices } from './data.services';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosServiceService {

  empleados:Empleado[]=[];
  


  constructor(private dataService:DataServices) { }

agregarEmpleadoServicio(empleado:Empleado){
  this.empleados.push(empleado);
  this.dataService.guardarEmpleados(this.empleados);
}







encontrarEmpleado(indice:number){

  let empleado:Empleado=this.empleados[indice];
  return empleado;
}


actualizarEmpleado(indice:number, empleado:Empleado){

this.empleados[indice]=empleado;

this.dataService.actualizarEmpleado(indice,empleado);

}


 eliminarEmpleado(indice: number) {
  this.empleados.splice(indice, 1);

  this.dataService.eliminarEmpleado(indice)

  if(this.empleados!=null)

  this.dataService.guardarEmpleados(this.empleados)
}


setEmpleados(misEmpleados:Empleado[]){
this.empleados=misEmpleados;

}


obtenerEmpleados(){

  return this.dataService.cargarEmpleados();
}

}
