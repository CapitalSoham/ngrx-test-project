import { createAction,props } from '@ngrx/store';

export const user_list_request = createAction('[User List] Request');
export const user_list_success = createAction('[User List] Success',props<{user: any;}>());
export const company_list_success = createAction('[Company List] Success',props<{company: any;}>());
export const is_filtered = createAction('[Filter List] Success');
export const filter = createAction('[Filter Data] Success',props<{filter_data: any;}>());
export const search = createAction('[Search Data] Success',props<{search_data: any;}>());
export const refresh = createAction('[User List] Refresh');

