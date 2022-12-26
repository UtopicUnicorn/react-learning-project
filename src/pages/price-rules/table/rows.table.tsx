import React from 'react';
import { PriceRuleInterface } from '../interfaces/price-rule.interface';

export function PriceRulesRows(rules: PriceRuleInterface[]) {
  return rules.map((rule, index) => {
    return (
      <tr data-id={index} key={index}>
        <td>{rule.name}</td>
        <td>{rule.percent}</td>
        <td>{rule.min}</td>
        <td>{rule.max}</td>
      </tr>
    );
  });
}
