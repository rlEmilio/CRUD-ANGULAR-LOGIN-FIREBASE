import { ActivatedRoute, Router } from '@angular/router';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { Empleado } from '../empleado';
import { EmpleadosServiceService } from '../empleados.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-actualiza-component',
  templateUrl: './actualiza-component.component.html',
  styleUrls: ['./actualiza-component.component.css']
})
export class ActualizaComponentComponent {

  accion:number; 

  nombre:String="";
  apellido:String="";
  cargo:String="";
  sueldo:number;
  indice:number;
  empleados:Empleado[]=[];
  
  
  
  constructor(private router: Router,
    private miServicio:ServicioEmpleadosService, private miServicioEmpleado:EmpleadosServiceService,
    private route:ActivatedRoute){

     
     
      this.empleados=miServicioEmpleado.empleados;
       
      this.indice=this.route.snapshot.params['id'];

      let empleado:Empleado=this.miServicioEmpleado.encontrarEmpleado(this.indice);

      this.nombre=empleado.nombre;
      this.apellido=empleado.apellido;
      this.cargo=empleado.cargo;
      this.sueldo=empleado.sueldo;


      this.accion=parseInt(this.route.snapshot.queryParams['accion'])
      
        
    }
      
        volverAlInicio() {
          this.router.navigate(['/']); // ruta de inicio
        }


     
      
      
        
        
        ActualizaEmpleado(){
      
          if(this.accion==1){
          let miEmpleado=new Empleado(this.nombre, this.apellido, this.cargo, this.sueldo)
          
         
        this.miServicioEmpleado.actualizarEmpleado(this.indice,miEmpleado);
          
       
          
        
        }

          else {


          this.miServicioEmpleado.eliminarEmpleado(this.indice);
         
          }
          this.router.navigate(['/'])
      } 
        
        limpiardatos(){
          this.nombre="";
        this.apellido=""; 
        this.cargo="";
        this.sueldo=0;
        }
        
        

}
