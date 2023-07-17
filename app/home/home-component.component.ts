import { Component } from '@angular/core';
import { NONE_TYPE } from '@angular/compiler';
import { Empleado } from '../empleado';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { EmpleadosServiceService } from '../empleados.service';
  

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent {
  title = 'Empleados';


  constructor(private miServicio:ServicioEmpleadosService, 
    private miServicioEmpleado: EmpleadosServiceService){

    //this.empleados=this.miServicioEmpleado.empleados;

    this.miServicioEmpleado.obtenerEmpleados().subscribe(misEmpleados=>{
  console.log(misEmpleados)



  this.empleados=Object.values(misEmpleados) 

  this.miServicioEmpleado.setEmpleados(this.empleados);

});


  }


  empleados:Empleado[]=[];

  nombre:string="";
apellido:string="";
cargo:string="";
sueldo:number=0;




agregarEmpleado(){

  let miEmpleado=new Empleado(this.nombre, this.apellido, this.cargo, this.sueldo)
  this.miServicio.muestraMensaje("Nombre del empleado: "+ miEmpleado.nombre);
  this.miServicioEmpleado.agregarEmpleadoServicio(miEmpleado)
  

  
  }

  
  
  
  
  
  limpiardatos(){
    this.nombre="";
  this.apellido=""; 
  this.cargo="";
  this.sueldo=0;
  }
  
  }