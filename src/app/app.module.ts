import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ParqueaderoComponent } from './components/parqueadero/parqueadero.component';
import { ConversionTemperaturaComponent } from './components/conversion-temperatura/conversion-temperatura.component';
import { HomeComponent } from './components/home/home.component';
import {APP_ROUTING} from "./app.routes";
import {parqueaderoService} from "./services/parqueadero.service";
import {conversionService} from "./services/conversion.service";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ParqueaderoComponent,
    ConversionTemperaturaComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING
  ],
  providers: [parqueaderoService,conversionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
