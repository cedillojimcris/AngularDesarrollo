package com.mx.SpringCrudEmpleados.servicio;

import java.util.List;

import com.mx.SpringCrudEmpleados.entidad.Empleados;

public interface EmpleadosServ {
	
	public void guardar(Empleados empleados);
	public void editar(Empleados empleados);
	public void eliminar(Empleados empleados);
	public Empleados buscar(Empleados empleados);
	public List<Empleados> listar();

}
