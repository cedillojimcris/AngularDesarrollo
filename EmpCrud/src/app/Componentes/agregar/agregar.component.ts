import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleados } from 'src/app/Entidad/Empleados';
import { ServicioService } from 'src/app/Servicios/servicio.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  constructor(private router : Router, private service : ServicioService) { }

  ngOnInit(): void {
  }

  empleados : Empleados = new Empleados();

  Guardar()
  {
    this.service.agregarLp(this.empleados).subscribe(data =>{
      alert("Empleado Registrado");
      this.router.navigate(["listar"]);
    });
  }
}
