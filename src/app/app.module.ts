import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule,  } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';

import { DataTablesModule } from 'angular-datatables';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EngemanGerencialComponent } from './pages/engeman-gerencial/engeman-gerencial.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { PaginaInicialComponent } from './pages/pagina-inicial/pagina-inicial.component';
import { SearchComponent } from './components/search/search.component';
import { FilterPipe } from './components/pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EngemanGerencialComponent,
    NavbarComponent,
    PaginaInicialComponent,
    SearchComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    DataTablesModule
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'pt-br' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
