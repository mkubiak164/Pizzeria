import {Adress} from './adress';

export class Order {
  id: number;
  pizzaIds: number[];
  pastaIds: number[];
  drinkIds: number[];
  adress: Adress;
}
