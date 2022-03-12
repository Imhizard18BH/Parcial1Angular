import {Component, Input, OnInit} from '@angular/core';
import {parqueaderoService} from "../../services/parqueadero.service";
import {Router} from "@angular/router";
import {conversionService} from "../../services/conversion.service";

@Component({
  selector: 'app-conversion-temperatura',
  templateUrl: './conversion-temperatura.component.html',
  styleUrls: ['./conversion-temperatura.component.css']
})
export class ConversionTemperaturaComponent implements OnInit {
  valor:number=0;
  resultado:number=0;
  constructor(private _conversionService:conversionService,private router:Router) { }

  ngOnInit(): void {
  }
  conversionAFahrenheit(){
  this.resultado=this._conversionService.conversionAFahrenheit(this.valor);
  return this.valor;
 }
 conversionACentigrados(){
  this.resultado=this._conversionService.conversionACentigrados(this.valor);
  return this.valor;
 }
}
