import { createReducer, on } from '@ngrx/store';
import { UserApiActions } from './user.actions';

export const initialState: any = [];

export const usersReducer = createReducer(
  initialState,
  on(UserApiActions.retrieveUsersList, (_state, { users }) => users)
);
