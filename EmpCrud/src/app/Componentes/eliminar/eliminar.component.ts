import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleados } from 'src/app/Entidad/Empleados';
import { ServicioService } from 'src/app/Servicios/servicio.service';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css']
})
export class EliminarComponent implements OnInit {

  empleados : Empleados = new Empleados();
  constructor(private router : Router, private service : ServicioService) { }

  ngOnInit(): void {
    this.Buscar();
  }

  Buscar()
  {
    let id = localStorage.getItem("id");
    this.empleados.id =+ Number(id);
    this.service.buscarLp(this.empleados).subscribe(data => {
      this.empleados = data;
    });
  }

  Eliminar(empleados : Empleados)
  {
    this.service.eliminarLp(this.empleados).subscribe(data =>{
      alert("Se eliminó el registro del empleado");
      this.router.navigate(["listar"]);
    });
  }

}
