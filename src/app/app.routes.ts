import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import {ParqueaderoComponent} from "./components/parqueadero/parqueadero.component";
import {ConversionTemperaturaComponent} from "./components/conversion-temperatura/conversion-temperatura.component";

const APP_ROUTES: Routes=[
  {path:'home', component:HomeComponent},
  {path:'parqueadero', component:ParqueaderoComponent},
  {path:'conversion', component:ConversionTemperaturaComponent},
  {path:'**',pathMatch:'full',redirectTo:'home'}
  ];

export const APP_ROUTING=RouterModule.forRoot(APP_ROUTES);
