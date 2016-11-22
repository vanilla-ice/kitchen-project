import data from './birzha-kuhon-rf.xml';

const TOGGLE_SLIDER = 'TOGGLE_SLIDER';
const data_shop = data.yml_catalog.shop[0];

const initialState = {
  goods: data_shop.offers[0].offer,

  categoriesMap: new Map(),
  categoryOffers: new Map(),
  visibleCategories: new Map(),

  categoriesToShow: 3
};

function initState() {
  const categories = data_shop.categories[0].category;

  const categoriesMap = initialState.categoriesMap;
  const categoryOffers = initialState.categoryOffers;
  const goods = initialState.goods;
  let visibleCategories = initialState.visibleCategories;

  let visibleSource = categories.slice(0, initialState.categoriesToShow);

  // init categories
  for(let category of categories) {
    //console.log(category);

    category.$.id = Number(category.$.id);
    category.visible = visibleSource.indexOf(category) !== -1;

    // to-do: delete categoriesMap?
    categoriesMap.set(category.$.id, category);
    categoryOffers.set(category.$.id, []);
    visibleCategories.set(category.$.id, category.visible);
  }

  for(let item of goods) {
    categoryOffers.get(Number(item.categoryId)).push(item);
  }
}

initState();

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

export function toggleSlider(categoryId) {
  return {
    type: TOGGLE_SLIDER,
    payload: categoryId
  };
}
