import { createAction,props } from '@ngrx/store';

export const user_list_request = createAction('[User List] Request');
export const user_list_success = createAction('[User List] Success',props<{user: any;}>());
export const refresh = createAction('[User List] Refresh');

