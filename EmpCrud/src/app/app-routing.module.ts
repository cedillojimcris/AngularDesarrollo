import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './Componentes/agregar/agregar.component';
import { EditarComponent } from './Componentes/editar/editar.component';
import { EliminarComponent } from './Componentes/eliminar/eliminar.component';
import { ListarComponent } from './Componentes/listar/listar.component';

const routes: Routes = [
  {path:'listar',component:ListarComponent},
	{path:'editar',component:EditarComponent},
	{path:'eliminar',component:EliminarComponent},
	{path:'agregar',component:AgregarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
