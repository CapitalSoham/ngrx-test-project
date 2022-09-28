import { createReducer, createSelector, on } from '@ngrx/store';
import { user_list_request, user_list_success, refresh, company_list_success, is_filtered, filter,search } from './app.actions';

export interface UserReducerState {
    loading: boolean;
    loaded: boolean;
    user: any;
    company:any;
    load_company:boolean;
    filter:boolean;
    filter_data:any;
    search_data:any;
  }
  
  const initialState = {
    loading: false,
    loaded: false,
    user: [],
    company:[],
    load_company:false,
    filter:false,
    filter_data:'',
    search_data:''
  };

export const userReducer = createReducer(
  initialState,
  on(user_list_request, (state: any) => ({...state,...{loading:true,loaded:true}})),
  on(user_list_success, (state: any,{user}) => ({...state,...{user:user}})),
  on(company_list_success, (state: any,{company}) => ({...state,...{load_company:true,company:company}})),
  on(is_filtered, (state: any) => ({...state,...{loading:false,loaded:false,filter:true}})),
  on(filter, (state: any,{filter_data}) => ({...state,...{filter_data:filter_data}})),
  on(search, (state: any,{search_data}) => ({...state,...{search_data:search_data}})),
  on(refresh, (state: any) => ({...state,...{loading:false,loaded:false,filter:false,load_company:false,user:[],company:[],filter_data:'',search_data:''}}))
);