import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EngemanGerencialComponent } from './pages/engeman-gerencial/engeman-gerencial.component';
import { PaginaInicialComponent } from './pages/pagina-inicial/pagina-inicial.component';

const routes: Routes = [
  { 
    path: "",
    component: PaginaInicialComponent,
  },
  { 
    path: "engeman-gerencial",
    component: EngemanGerencialComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
