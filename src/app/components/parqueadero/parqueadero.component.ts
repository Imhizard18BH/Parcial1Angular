import {Component, Input, OnInit} from '@angular/core';
import {parqueaderoService} from "../../services/parqueadero.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-parqueadero',
  templateUrl: './parqueadero.component.html',
  styleUrls: ['./parqueadero.component.css']
})
export class ParqueaderoComponent implements OnInit {
  @Input() horaEntrada: number=0;
  @Input() horaSalida: number=0;

  constructor(private _parqueaderoService:parqueaderoService,private router:Router) { }

  ngOnInit():void {
  }

  calcularCargos(horaEntrada:number,horaSalida:number){
    this.router.navigate(['/parqueadero/',horaEntrada,horaSalida]);
  }
}
