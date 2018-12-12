import * as AnimalActions from './animals.actions';

export interface State {
  animals: {
    dog: {
      index: number,
      woof: boolean,
    },
    cat: {
      index: number,
      meow: boolean,
    },
  };
}

export const initialState: State = {
  animals: {
    dog: {
      index: undefined,
      woof: false,
    },
    cat: {
      index: undefined,
      meow: false,
    }
  }
};

export function animalsReducers(state = initialState, action: AnimalActions.AnimalsActions) {

  switch (action.type) {

    case AnimalActions.DOG_START_WOOFING:
      return {
        ...state,
        animals: {
          ...state.animals,
          dog: {
            ...state.animals.dog,
            woof: true,
            index: action.payload,
          }
        }
      };
    case AnimalActions.DOG_STOP_WOOFING:
      return {
        ...state,
        animals: {
          ...state.animals,
          dog: {
            ...state.animals.dog,
            woof: false,
            index: action.payload,
          }
        }
      };
    case AnimalActions.CAT_START_MEOWING:
      return {
        ...state,
        animals: {
          ...state.animals,
          cat: {
            ...state.animals.cat,
            meow: true,
            index: action.payload,
          }
        }
      };
    case AnimalActions.CAT_STOP_MEOWING:
      return {
        ...state,
        animals: {
          ...state.animals,
          cat: {
            ...state.animals.cat,
            meow: false,
            index: action.payload,
          }
        }
      };
    default:
      return state;

  }


}
