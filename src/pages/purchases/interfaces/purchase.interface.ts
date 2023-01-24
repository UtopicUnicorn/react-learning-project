import { NomenclatureInterface } from '../../nomenclature/interfaces/nomenclature.interface';

export interface PurchaseInterface {
  readonly id?: string;
  readonly organization: string;
  readonly supplier: string;
  readonly stock: string;
  readonly item: NomenclatureInterface | string;
  readonly sum: number;
  readonly partner: string;
  readonly document: string;
  readonly addinvest?: number;
  readonly date?: string;
}
