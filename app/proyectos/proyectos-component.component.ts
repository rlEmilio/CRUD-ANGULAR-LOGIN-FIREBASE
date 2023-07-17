import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { Empleado } from '../empleado';
import { EmpleadosServiceService } from '../empleados.service';

@Component({
  selector: 'app-proyectos-component',
  templateUrl: './proyectos-component.component.html',
  styleUrls: ['./proyectos-component.component.css']
})
export class ProyectosComponentComponent {



  constructor(private router: Router,
private miServicio:ServicioEmpleadosService, private miServicioEmpleado:EmpleadosServiceService){
  this.empleados=miServicioEmpleado.empleados;
    }
  

  volverAlInicio() {
    this.router.navigate(['/']); // ruta de inicio
  }

  nombre:string="";
  apellido:string="";
  cargo:string="";
  sueldo:number=0;
  empleados:Empleado[]=[
  
  
  
  ];

  agregarEmpleado(){

    let miEmpleado=new Empleado(this.nombre, this.apellido, this.cargo, this.sueldo)
    this.miServicio.muestraMensaje("Nombre del empleado: "+ miEmpleado.nombre);
    this.miServicioEmpleado.agregarEmpleadoServicio(miEmpleado)
    
  
    
    this.router.navigate(['/'])
}
  

  
  
  
  
  limpiardatos(){
    this.nombre="";
  this.apellido=""; 
  this.cargo="";
  this.sueldo=0;
  }
  
  
}
