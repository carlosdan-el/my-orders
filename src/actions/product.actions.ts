import { createAction, props } from '@ngrx/store';
import { ProductCart } from '../entities/ProductCart';

export const add = createAction('Add', props<ProductCart>());
export const update = createAction('Update', props<ProductCart>());
export const remove = createAction('Remove', props<{id: string}>());
