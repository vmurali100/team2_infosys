import { createActionGroup, props } from '@ngrx/store';
import { User } from './user.model';

export const UserApiActions = createActionGroup({
  source: 'Users API',
  events: {
    'Retrieve Users List': props<{ users: ReadonlyArray<User> }>(),
    'Delete Users List': props<{ user: User }>(),
    'Add Users List': props<{ user: User }>(),
    'Update Users List': props<{ user: User }>(),
  },
});
