import { createSelector } from 'reselect';


// export const shopItemsSelector = state => state.shop.items;
// export default createSelector(
//   shopItemsSelector,
//   items => items.reduce((acc, item) => acc + item.value, 0)
// );

export const shopItemsSelector = state => {
  const titles = state.shop.items.map(item => item.title)
  console.log('shopItemsSelector returns titles: ', titles);
  return state.shop.items;
}
export default createSelector(
  shopItemsSelector,
  items => {
    console.log('subtotalSelector transformer called');
    return items.reduce((acc, item) => acc + item.value, 0)
  }
);
