
import { HttpClient } from '@angular/common/http';
import { ReturnStatement } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Empleados } from '../Entidad/Empleados';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http : HttpClient) { }

  urlListar= 'http://localhost:7001/EmpleadosRest/listar';
  urlAgregar= 'http://localhost:7001/EmpleadosRest/guardar';
  urlEliminar = 'http://localhost:7001/EmpleadosRest/eliminar';
  urlBuscar = 'http://localhost:7001/EmpleadosRest/buscar';
  urlEditar = 'http://localhost:7001/EmpleadosRest/editar';

  listarLp()
  {
    return this.http.get<Empleados[]>(this.urlListar);
  }

  buscarLp(empleados : Empleados)
  {
    return this.http.post<Empleados>(this.urlBuscar, empleados);
  }

  agregarLp(empleados : Empleados)
  {
    return this.http.post<Empleados>(this.urlAgregar, empleados);
  }

  eliminarLp(empleados : Empleados)
  {
    return this.http.post<Empleados>(this.urlEliminar, empleados);
  }

  editarLp(empleados : Empleados)
  {
    return this.http.post<Empleados>(this.urlEditar, empleados);
  }
}
