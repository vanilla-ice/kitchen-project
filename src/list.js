import data from './birzha-kuhon-rf.xml';

const TOGGLE_SLIDER = 'TOGGLE_SLIDER';
const data_shop = data.yml_catalog.shop[0];



const initialState = {
  //ui: data_shop.categories[0].category,

  goods: data_shop.offers[0].offer,

  categories: data_shop.categories[0].category,

  categoriesMap: new Map(),

  categoriesToShow: 3
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
