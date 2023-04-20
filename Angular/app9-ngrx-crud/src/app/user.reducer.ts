import { createReducer, on } from '@ngrx/store';
import { UserApiActions } from './user.actions';

export const initialState: any = []; // Complete Business Logic . This is the place Whete Store is getting Changed 

export const usersReducer = createReducer(
  initialState,
  on(UserApiActions.retrieveUsersList, (_state, { users }) => {
    return users
  })
);


// the Above On Method will have 2 arguments 
// First One is Action , Second one is Call back Function 