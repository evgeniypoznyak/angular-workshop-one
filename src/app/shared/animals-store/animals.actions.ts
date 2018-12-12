import { Action } from '@ngrx/store';

export const CAT_START_MEOWING = 'CAT_START_MEOWING';
export const CAT_STOP_MEOWING = 'CAT_STOP_MEOWING';

export const DOG_START_WOOFING = 'DOG_START_WOOFING';
export const DOG_STOP_WOOFING = 'DOG_STOP_WOOFING';


export class CatStartMeowing implements Action {
  readonly type = CAT_START_MEOWING;

  constructor(public payload: number) {}
}
export class CatStopMeowing implements Action {
  readonly type = CAT_STOP_MEOWING;

  constructor(public payload: number) {}
}

export class DogStartWoofing implements Action {
  readonly type = DOG_START_WOOFING;

  constructor(public payload: number) {}
}
export class DogStopWoofing implements Action {
  readonly type = DOG_STOP_WOOFING;

  constructor(public payload: number) {}
}

export type AnimalsActions = CatStartMeowing | CatStopMeowing | DogStartWoofing | DogStopWoofing;
