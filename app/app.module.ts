import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EmpleadoHijoComponent } from './empleado-hijo/empleado-hijo.component';
import { CaracteristicasEmpleadoComponent } from './caracteristicas-empleado/caracteristicas-empleado.component';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { HomeComponentComponent } from './home/home-component.component';

import { QuienesSomosComponentComponent } from './quienes-somos/quienes-somos-component.component';
import { ContactoComponentComponent } from './contacto/contacto-component.component';
import { RouterModule, Routes } from '@angular/router';
import { ProyectosComponentComponent } from './proyectos/proyectos-component.component';
import { EmpleadosServiceService } from './empleados.service';
import { ActualizaComponentComponent } from './actualiza/actualiza-component.component';
import { ErrorPersonalizadoComponentComponent } from './error-personalizado/error-personalizado-component.component';
import { DataServices } from './data.services';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { LoginServiceService } from './login.service';
import { CookieService } from 'ngx-cookie-service';
import { guardian } from './login/guardian';



const appRoutes:Routes=[

{path: '', component:HomeComponentComponent},
{path: 'contacto', component:ContactoComponentComponent,canActivate:[guardian]},
{path: 'quienes somos', component: QuienesSomosComponentComponent},
{path: 'proyectos', component:ProyectosComponentComponent},
{path: 'actualiza/:id', component:ActualizaComponentComponent},
{path: 'login', component: LoginComponent },

{path: '**', component: ErrorPersonalizadoComponentComponent }



  
];


@NgModule({
  declarations: [
    AppComponent,
    EmpleadoHijoComponent,
    CaracteristicasEmpleadoComponent,
    HomeComponentComponent,
    QuienesSomosComponentComponent,
    ContactoComponentComponent,
    ProyectosComponentComponent,
    ActualizaComponentComponent,
    ErrorPersonalizadoComponentComponent,
    LoginComponent,
   
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
  ],
  providers: [ServicioEmpleadosService, EmpleadosServiceService, DataServices, LoginServiceService, CookieService, guardian],
  bootstrap: [AppComponent]
})
export class AppModule { }
