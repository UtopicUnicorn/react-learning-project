import { PurchaseInterface } from '../../purchases/interfaces/purchase.interface';

export interface WorkItemsInterface {
  item: PurchaseInterface;
  store: string;
  amount: number;
  price: number;
  image: File;
}
