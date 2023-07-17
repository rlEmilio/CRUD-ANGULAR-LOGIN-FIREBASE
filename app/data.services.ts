import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Empleado } from './empleado';
import { LoginServiceService } from "./login.service";

@Injectable()
export class DataServices{

constructor(private httpClient:HttpClient, private loginservice:LoginServiceService){}

    //Escribe tus propias URL de la base de datos.


cargarEmpleados() {
    const token = this.loginservice.getidToken();
    const url = `https:  .json?auth=${token}`;
    return this.httpClient.get(url);

  }
  


 guardarEmpleados(empleados: Empleado[]) {
    const token = this.loginservice.getidToken();
    const url = `https:  .json?auth=${token}`;
    this.httpClient.put(url, empleados).subscribe({
      next: (v) => console.log('Se han guardado los empleados ' + v),
      error: (e) => console.log('Error' + e),
    });
  }
  
  actualizarEmpleado(indice: number, empleado: Empleado) {
    const token = this.loginservice.getidToken();
    const url = `https:   ${indice}.json?auth=${token}`;
    this.httpClient.put(url, empleado).subscribe({
      next: (v) => console.log('Se ha modificado correctamente el empleado: ' + v),
      error: (e) => console.log('Error' + e),
    });
  }
  
  eliminarEmpleado(indice: number) {
    const token = this.loginservice.getidToken();
    const url = `https:   ${indice}.json?auth=${token}`;
    this.httpClient.delete(url).subscribe({
      next: (v) => console.log('Se ha eliminado correctamente el empleado: ' + v),
      error: (e) => console.log('Error' + e),
    });
  }
}  

