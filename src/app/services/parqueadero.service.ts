import {Injectable} from "@angular/core";

@Injectable()
export  class parqueaderoService{

  constructor() {
    console.log('servicio parqueadero listo');

  }
  calcularCargos(horaEntrada:number,horaSalida:number):any{
    let tiempo:number=horaSalida-horaEntrada;
    let cuota:number=0;
    if(tiempo<=3){
      cuota=2000;
    }else if (tiempo>3 && tiempo<24){
      cuota=2000+((tiempo-3)*500);
    }else if(tiempo==24){
      cuota=10000;
    }else{
     console.log("Hubo un error el calcular su cuota")
    }
    return cuota;
  }
}

export interface parqueadero{
tiempo:number;
cuota:number;
}
