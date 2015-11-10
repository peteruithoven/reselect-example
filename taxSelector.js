import { createSelector } from 'reselect';
import subtotalSelector, {shopItemsSelector} from './subtotalSelector.js'

const taxPercentSelector = state => {
  console.log('taxPresentSelector called with: ', state.shop.taxPercent);
  return state.shop.taxPercent;
}
export default createSelector(
  subtotalSelector,
  taxPercentSelector,
  (subtotal, taxPercent) => {
    console.log('taxSelector transformer called');
    return subtotal * (taxPercent / 100)
  }
);
