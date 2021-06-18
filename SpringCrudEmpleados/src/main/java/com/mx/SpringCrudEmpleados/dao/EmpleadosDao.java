package com.mx.SpringCrudEmpleados.dao;

import org.springframework.data.repository.CrudRepository;

import com.mx.SpringCrudEmpleados.entidad.Empleados;

public interface EmpleadosDao extends CrudRepository<Empleados, Integer> {

}
