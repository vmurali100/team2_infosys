import { createAction, props } from '@ngrx/store';
export interface User {
  fname: string;
  lname: string;
  email: string;
}
export const addUser = createAction(
  '[User Component] AddUser',
  props<{ user: User }>()
);
export const deleteUser = createAction(
  '[User Component] DeleteUser',
  props<{ user: User }>()
);
export const udapteUser = createAction(
  '[User Component] UpdateUser',
  props<{ user: User }>()
);
