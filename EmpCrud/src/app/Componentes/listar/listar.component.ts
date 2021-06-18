import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleados } from 'src/app/Entidad/Empleados';
import { ServicioService } from 'src/app/Servicios/servicio.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  empleados : Empleados[];
  constructor(private router : Router, private service : ServicioService) { }

  ngOnInit(): void {
    this.service.listarLp().subscribe(data =>{
      console.log("Listar -> "+JSON.stringify(data));
      this.empleados = data;
    })
  }

  Eliminar(empleados : Empleados) : void
  {
    localStorage.setItem("id", empleados.id.toString());
    this.router.navigate(["eliminar"]);
  }

  Editar(empleados : Empleados) : void
  {
    localStorage.setItem("id", empleados.id.toString());
    this.router.navigate(["editar"]);
  }
}
