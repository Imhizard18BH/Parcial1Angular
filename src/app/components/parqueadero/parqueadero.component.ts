import {Component, Input, OnInit} from '@angular/core';
import {parqueaderoService} from "../../services/parqueadero.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-parqueadero',
  templateUrl: './parqueadero.component.html',
  styleUrls: ['./parqueadero.component.css']
})
export class ParqueaderoComponent implements OnInit {
  horaEntrada: number=0;
  horaSalida: number=0;
  cuota: number=0;
  fecha:number=0;

  constructor(private _parqueaderoService:parqueaderoService,private router:Router) { }

  ngOnInit():void {
  }

  calcularCargos(){
    if(this.horaEntrada>= 25 || this.horaSalida>=25){
      alert("No se puede calcular correctamente")
    }else if(this.horaEntrada>this.horaSalida){
      alert("No se puede registrar una hora de llegada mayor al de salida")
    }else{
      this.cuota=this._parqueaderoService.calcularCargos(this.horaEntrada,this.horaSalida);
    }
  }
}
