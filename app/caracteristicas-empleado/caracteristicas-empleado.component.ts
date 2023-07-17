import { Component, EventEmitter, Output} from '@angular/core';
import { Empleado } from '../empleado';
import { EmpleadosServiceService } from '../empleados.service';
import { ActivatedRoute } from '@angular/router';
import { ServicioEmpleadosService } from '../servicio-empleados.service';



@Component({
  selector: 'app-caracteristicas-empleado',
  templateUrl: './caracteristicas-empleado.component.html',
  styleUrls: ['./caracteristicas-empleado.component.css']
})
export class CaracteristicasEmpleadoComponent {
 
  caracteristica: string;
  route: ActivatedRoute;


@Output() newItemEvent= new EventEmitter<string>();
  
constructor(private empleadosService: ServicioEmpleadosService) { 
   
  
  }


  agregarCaracteristica(nuevacaracteristica:string) {

    this.newItemEvent.emit(nuevacaracteristica);
    this.empleadosService.muestraMensaje("Va a agregar una característica")
    
    }
  }
  
 
    
  
  




function output(): (target: CaracteristicasEmpleadoComponent, propertyKey: "newItemEvent") => void {
  throw new Error('Function not implemented.');
}

