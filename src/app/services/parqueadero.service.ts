import {Injectable} from "@angular/core";

@Injectable()
export  class parqueaderoService{

  constructor() {
    console.log('servicio parqueadero listo');
  }
  calcularCargos(horaEntrada:number,horaSalida:number):any{
    var tiempo:number=horaSalida-horaEntrada;
    var cuota:number=0;
      for (var i=1;i<=tiempo;i++){
        if (i<=3){
          cuota=2000
        }else{
          cuota+=500
        }
      }
    return cuota;
  }
}

export interface parqueadero{
tiempo:number;
cuota:number;
}
