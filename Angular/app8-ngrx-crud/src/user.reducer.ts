import { createReducer, on } from '@ngrx/store';
import { addUser, deleteUser, udapteUser, User } from './user.actions';
export interface State {
  users: User[];
}
export const initialState: State = {
  users: [],
};
export const userReducer = createReducer(
  initialState,
  on(addUser, (state, { user }) => ({
    ...state,
    users: [...state.users, user],
  })),
  on(deleteUser, (state, { user }) => ({
    ...state,
    users: state.users.filter((u) => u.email !== user.email),
  })),
);
