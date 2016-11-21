import data from './birzha-kuhon-rf.xml';

const TOGGLE_SLIDER = 'TOGGLE_SLIDER';
const data_shop = data.yml_catalog.shop[0];

/*const initObjectsFromArray = (arr) => {
  let object = {};

  return arr.map((obj, i) => {
    return object;
  });
};*/

const initialState = {
  ui: {
    kitchenHood: true,
    hob: true,
    oven: true,
    dishwasher: false,
    fridge: false
  },

  goods: data_shop.offers[0].offer,

  categories: data_shop.categories[0].category

};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case TOGGLE_SLIDER:
      return {
        ...state,
        ui: {
          ...state.ui,
          [action.payload]: !state.ui[action.payload]
        }
      }
    default:
      return state;
  }
}

export function toggleSlider(name) {
  return {
    type: TOGGLE_SLIDER,
    payload: name
  };
}
