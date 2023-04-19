import { createAction, props } from '@ngrx/store';

export interface User {
  fname: string;
  lname: string;
  email: string;
  password: string;
}
export const addUser = createAction(
  '[User Component] add',
  props<{ payload: User }>()
);
export const deleteUser = createAction(
  '[User Component] delete',
  props<{ payload: User }>()
);
export const updateUser = createAction(
  '[User Component] update',
  props<{ payload: User }>()
);

// import { Action } from '@ngrx/store';
// export enum CourseActionType {
//   addUser = '[User] add',
//   updateUser = '[User] update',
//   deleteUser = '[User] delete',
// }
// export class addUserAction implements Action {
//   readonly type = CourseActionType.addUser;
//   //add an optional payload
//   constructor(public payload: User) {}
// }
// export class updateUserAction implements Action {
//   readonly type = CourseActionType.updateUser;
//   //add an optional payload
//   constructor(public payload: User) {}
// }
// export class deleteUserAction implements Action {
//   readonly type = CourseActionType.deleteUser;
//   //add an optional payload
//   constructor(public payload: User) {}
// }
// export type UserAction = { addUserAction; updateUserAction; deleteUserAction };
