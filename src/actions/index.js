/**
 * Created by shenlu on 17/3/1.
 */
import { createAction } from 'redux-actions'
export const addCountBtn = createAction('add count btn');
export const cutCountBtn = createAction('cut count btn');
export const asyncAddBtn = createAction('async add btn');
export const asyncCancleBtn = createAction('async cancle btn');
