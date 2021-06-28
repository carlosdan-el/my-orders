import { Action } from '@ngrx/store';

export class ActionEntity implements Action {
    type: string = '';
    payload: any;
}