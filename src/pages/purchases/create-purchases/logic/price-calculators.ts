import { PartnersInterface } from '../../../patners/interfaces/partners.interface';

export function marginPriceCalculator(partners: PartnersInterface[], id: string, buyPrice: number) {
  const partner = partners.find((partner) => partner.id === id);
  const percent = partner?.pricerule?.percent;
  return (buyPrice * percent!) / 100;
}
