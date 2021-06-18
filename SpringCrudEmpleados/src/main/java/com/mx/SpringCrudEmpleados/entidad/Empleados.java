package com.mx.SpringCrudEmpleados.entidad;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name="EMPLEADOS")
public class Empleados {

	/*CREATE TABLE EMPLEADOS(
    ID NUMBER PRIMARY KEY,
    NOMBRE NVARCHAR2(100),
    APELLIDO NVARCHAR2(100),
    DEPARTAMENTO NVARCHAR2(100),
    EDAD NUMBER
);*/
	
	@Id
	int id;
	String nombre;
	String apellido;
	String departamento;
	int edad;
	
	
}
