import {Adress} from './adress';
import {Status} from '../orders/status';

export class Order {
  id: number;
  pizzaIds: number[];
  pastaIds: number[];
  drinkIds: number[];
  status: Status;
  adress: Adress;
}
