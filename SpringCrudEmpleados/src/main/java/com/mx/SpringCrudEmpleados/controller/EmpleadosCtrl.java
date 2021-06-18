package com.mx.SpringCrudEmpleados.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mx.SpringCrudEmpleados.entidad.Empleados;
import com.mx.SpringCrudEmpleados.servicio.EmpleadosServ;

@CrossOrigin(origins="http://localhost:4200", maxAge= 3600)
@RestController
@RequestMapping("EmpleadosRest")
public class EmpleadosCtrl {
	
	@Autowired
	EmpleadosServ empleadosServ;
	
	@GetMapping("listar")
	public List<Empleados> listar()
	{
		return empleadosServ.listar();
	}
	
	@PostMapping("guardar")
	public void guardar(@RequestBody Empleados empleados)
	{
		empleadosServ.guardar(empleados);
	}
	
	@PostMapping("buscar")
	public Empleados buscar(@RequestBody Empleados empleados)
	{
		empleados = empleadosServ.buscar(empleados);
		return empleados;
	}

	@PostMapping("eliminar")
	public void eliminar(@RequestBody Empleados empleados)
	{
		empleadosServ.eliminar(empleados);
	}
	
	@PostMapping("editar")
	public void editar(@RequestBody Empleados empleados)
	{
		empleadosServ.editar(empleados);
	}
}
