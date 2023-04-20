import { createActionGroup, props } from '@ngrx/store';
import { User } from './user.model';

export const UserApiActions = createActionGroup({
  source: 'Users API',
  events: {
    'Retrieve Users List': props<{ users: ReadonlyArray<User> }>(),
    'Updte Users List': props<{ user: User }>(),
  },
});
