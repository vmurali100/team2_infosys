import { createReducer, on } from '@ngrx/store';
import { addUser, updateUser, deleteUser, User } from './user.actions';

export const initialState: { user: User[] } = {
  user: [],
};

export const userReducer = createReducer(
  initialState,
  on(addUser, (state) => state),
  on(updateUser, (state) => state),
  on(deleteUser, (state) => state)
);
