import { createSelector } from 'reselect';
import subtotalSelector from './subtotalSelector.js'
import taxSelector from './taxSelector.js';

const bike = {title: 'Bike', value: 200};
const lamp = {title: 'Lamp', value: 5};
const chain = {title: 'Chain', value: 10};

const state1 = {
	shop: {
		items: [bike,lamp,chain],
		taxPercent: 0.20
	}
}

console.log('subTotal state1: ', subtotalSelector(state1));
console.log('subTotal state1: ', subtotalSelector(state1));
console.log('taxes state1: ', taxSelector(state1));

const state2 = {
	shop: {
		items: [lamp,chain],
		taxPercent: 0.20
	}
}

console.log('subTotal state2: ', subtotalSelector(state2));
console.log('taxes state2: ', taxSelector(state2));

console.log('subtotalSelector.recomputations(): ', subtotalSelector.recomputations());
console.log('taxSelector.recomputations(): ', taxSelector.recomputations());

const defaultItems = [bike,lamp,chain];
const state3 = {
	shop: {
		items: defaultItems,
		taxPercent: 0.20
	}
}
console.log('subTotal state3: ', subtotalSelector(state3));
console.log('taxes state3: ', taxSelector(state3));

console.log('subtotalSelector.recomputations(): ', subtotalSelector.recomputations());
console.log('taxSelector.recomputations(): ', taxSelector.recomputations());

const state4 = {
	shop: {
		items: defaultItems,
		taxPercent: 0.20 // re defining same value causes? 
	}
}
console.log('subTotal state4: ', subtotalSelector(state4));
console.log('taxes state4: ', taxSelector(state4));

console.log('subtotalSelector.recomputations(): ', subtotalSelector.recomputations());
console.log('taxSelector.recomputations(): ', taxSelector.recomputations());


const state5 = {
	shop: {
		items: defaultItems,
		taxPercent: 0.10
	}
}
console.log('subTotal state5: ', subtotalSelector(state5));
console.log('taxes state5: ', taxSelector(state5));

console.log('subtotalSelector.recomputations(): ', subtotalSelector.recomputations());
console.log('taxSelector.recomputations(): ', taxSelector.recomputations());
