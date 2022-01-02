import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { FilterPipe } from './components/pipes/filter.pipe';
import { PagesModule } from './pages/pages.module';
import { ComponentsModule } from './components/components.module.ts.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    ComponentsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
