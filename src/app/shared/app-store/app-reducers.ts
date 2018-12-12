import { ActionReducerMap } from '@ngrx/store';
import * as animalsReducer from '../animals-store/animals.reducers';

export interface AppState {
  animals: animalsReducer.State;
}

export const reducers: ActionReducerMap<any> = {
  animals: animalsReducer.animalsReducers,
};
