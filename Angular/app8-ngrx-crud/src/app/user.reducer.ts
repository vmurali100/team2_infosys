import { createReducer, on } from '@ngrx/store';

export interface User {
  id: number;
  name: string;
}

export interface AppState {
  users: User[];
}

export const initialState: AppState = {
  users: [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' }
  ]
};

export const appReducer = createReducer(
  initialState
);
