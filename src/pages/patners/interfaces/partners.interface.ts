import { PriceRuleInterface } from '../../price-rules/interfaces/price-rule.interface';

export interface PartnersInterface {
  id?: string;
  surname: string;
  name: string;
  parentname: string;
  phone: string;
  mail: string;
  type: string;
  organization?: string;
  address?: string;
  inn?: string;
  bank?: string;
  paynumber?: string;
  bik?: string;
  pricerule?: PriceRuleInterface;
  kpp?: string;
}
