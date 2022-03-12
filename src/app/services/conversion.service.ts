import {Injectable} from "@angular/core";

@Injectable()
export class conversionService{
  constructor() {
    console.log("conversion lista para usarse")
  }

  conversionAFahrenheit(valor:number){
    return 9.0/5.0*valor+32
  }
  conversionACentigrados(valor:number){
    return 5.0 / 9.0 * (valor - 32);
  }
}
