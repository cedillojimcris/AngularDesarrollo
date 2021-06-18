import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleados } from 'src/app/Entidad/Empleados';
import { ServicioService } from 'src/app/Servicios/servicio.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  empleados : Empleados = new Empleados();
  constructor(private router : Router, private service : ServicioService) { }

  ngOnInit(): void {
    this.Buscar();
  }

  Buscar()
  {
    let id = localStorage.getItem("id");
    this.empleados.id =+ Number(id);
    this.service.buscarLp(this.empleados).subscribe(data =>{
      this.empleados = data;
    });
  }

  Editar(empleados : Empleados)
  {
    this.service.editarLp(this.empleados).subscribe(data =>{
      alert("Se editó correctamente los datos del empleado");
      this.router.navigate(["listar"]);
    });
  }
}
