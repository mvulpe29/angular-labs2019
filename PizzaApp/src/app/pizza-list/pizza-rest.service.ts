import {Injectable, Provider} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IPizza} from "./pizza.model";
import {IPizzaService, PIZZA_SERVICE} from "./pizza.service";
import {Observable} from "rxjs";

@Injectable()
export class PizzaRestService implements IPizzaService {

  private url: string = "https://angular-labs2021-59f10-default-rtdb.firebaseio.com/pizzas.json";

  constructor(private http: HttpClient) {
  }

  getPizzas(): Observable<Array<IPizza>> {
    return this.http.get<Array<IPizza>>(this.url);
  }
}


export const PizzaServiceProvider: Provider = {
  provide: PIZZA_SERVICE,
  useClass: PizzaRestService
};
