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
    this.cuota=this._parqueaderoService.calcularCargos(this.horaEntrada,this.horaSalida);
  }
}
