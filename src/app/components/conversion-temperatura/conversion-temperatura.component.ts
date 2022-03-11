import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conversion-temperatura',
  templateUrl: './conversion-temperatura.component.html',
  styleUrls: ['./conversion-temperatura.component.css']
})
export class ConversionTemperaturaComponent implements OnInit {
  valor:number=0;
  constructor() { }

  ngOnInit(): void {
  }
  conversionAFahrenheit(valor:number){

 }
 conversionACentigrados(valor:number){

 }
}
