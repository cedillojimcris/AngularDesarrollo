package com.mx.SpringCrudEmpleados.servicio;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mx.SpringCrudEmpleados.dao.EmpleadosDao;
import com.mx.SpringCrudEmpleados.entidad.Empleados;

@Service
public class EmpleadosServImp implements EmpleadosServ{

	@Autowired
	EmpleadosDao empleadosDao;
	
	@Override
	public void guardar(Empleados empleados) {
		// TODO Auto-generated method stub
		empleadosDao.save(empleados);
	}

	@Override
	public void editar(Empleados empleados) {
		// TODO Auto-generated method stub
		empleadosDao.save(empleados);
	}

	@Override
	public void eliminar(Empleados empleados) {
		// TODO Auto-generated method stub
		empleadosDao.delete(empleados);
	}

	@Override
	public Empleados buscar(Empleados empleados) {
		// TODO Auto-generated method stub
		return empleadosDao.findById(empleados.getId()).orElse(null);
	}

	@Override
	public List<Empleados> listar() {
		// TODO Auto-generated method stub
		return (List<Empleados>) empleadosDao.findAll();
	}

}
