const TOGGLE_SLIDER = 'TOGGLE_SLIDER'

const initialState = {
  ui: {
    kitchenHood: true,
    hob: true,
    oven: true,
    dishwasher: false,
    fridge: false
  },

  data: {
    kitchenHood: {
      order: 1,
      list: [
        {
          name: 'ge234',
          img: 'http://remontechnik.ru/uploads/attachments/article/2015-03-17/1436704364/originals/record_115941390.jpg',
          price: '2'
        },
        {
          name: 'ge234',
          img: 'http://remontechnik.ru/uploads/attachments/article/2015-03-17/1436704364/originals/record_115941390.jpg',
          price: '2'
        },
        {
          name: 'ge234',
          img: 'http://remontechnik.ru/uploads/attachments/article/2015-03-17/1436704364/originals/record_115941390.jpg',
          price: '2'
        }

      ]
    },
    hob: {
      order: 2,
      list: [
        {
          name: 'ge234',
          img: 'http://remontechnik.ru/uploads/attachments/article/2015-03-17/1436704364/originals/record_115941390.jpg',
          price: '2'
        },
        {
          name: 'ge234',
          img: 'http://remontechnik.ru/uploads/attachments/article/2015-03-17/1436704364/originals/record_115941390.jpg',
          price: '2'
        },
        {
          name: 'ge234',
          img: 'http://remontechnik.ru/uploads/attachments/article/2015-03-17/1436704364/originals/record_115941390.jpg',
          price: '2'
        }

      ]
    },
    oven: {
      order: 3,
      list: [
        {
          name: 'ge234',
          img: 'http://remontechnik.ru/uploads/attachments/article/2015-03-17/1436704364/originals/record_115941390.jpg',
          price: '2'
        },
        {
          name: 'ge234',
          img: 'http://remontechnik.ru/uploads/attachments/article/2015-03-17/1436704364/originals/record_115941390.jpg',
          price: '2'
        },
        {
          name: 'ge234',
          img: 'http://remontechnik.ru/uploads/attachments/article/2015-03-17/1436704364/originals/record_115941390.jpg',
          price: '2'
        }

      ]
    },
    dishwasher: {
      order: 4,
      list: [
        {
          name: 'ge234',
          img: 'http://remontechnik.ru/uploads/attachments/article/2015-03-17/1436704364/originals/record_115941390.jpg',
          price: '2'
        },
        {
          name: 'ge234',
          img: 'http://remontechnik.ru/uploads/attachments/article/2015-03-17/1436704364/originals/record_115941390.jpg',
          price: '2'
        },
        {
          name: 'ge234',
          img: 'http://remontechnik.ru/uploads/attachments/article/2015-03-17/1436704364/originals/record_115941390.jpg',
          price: '2'
        }

      ]
    },
    fridge: {
      order: 5,
      list: [
        {
          name: 'ge234',
          img: 'http://remontechnik.ru/uploads/attachments/article/2015-03-17/1436704364/originals/record_115941390.jpg',
          price: '2'
        },
        {
          name: 'ge234',
          img: 'http://remontechnik.ru/uploads/attachments/article/2015-03-17/1436704364/originals/record_115941390.jpg',
          price: '2'
        },
        {
          name: 'ge234',
          img: 'http://remontechnik.ru/uploads/attachments/article/2015-03-17/1436704364/originals/record_115941390.jpg',
          price: '2'
        }

      ]
    },
  }
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
