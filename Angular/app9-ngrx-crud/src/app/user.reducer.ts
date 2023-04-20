import { createReducer, on } from '@ngrx/store';
import { UserApiActions } from './user.actions';
import { User } from './user.model';

export const initialState: any = []; // Complete Business Logic . This is the place Whete Store is getting Changed 

export const usersReducer = createReducer(
  initialState,
  on(UserApiActions.retrieveUsersList, (_state, { users }) => {
    return users
  }),
  on(UserApiActions.updteUsersList,(_state,{user})=>{
    console.log(_state)
    return _state.filter((usr:User)=>usr.id !== user.id)
  })
);


// the Above On Method will have 2 arguments 
// First One is Action , Second one is Call back Function 