import { createReducer, createSelector, on } from '@ngrx/store';
import { user_list_request, user_list_success, refresh } from './app.actions';

export interface UserReducerState {
    loading: boolean;
    loaded: boolean;
    user: any;
  }
  
  const initialState = 0;

export const userReducer = createReducer(
  initialState,
  on(user_list_request, (state: any) => ({...state,...{loading:true,loaded:true}})),
  on(user_list_success, (state: any,{user}) => ({...state,...{loading:true,loaded:true,user:user}})),
  on(refresh, (state: any) => ({...state,...{loading:false,loaded:false}}))
);