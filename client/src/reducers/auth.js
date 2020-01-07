import {T, cond} from 'ramda';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import {reducer} from '../lib/redux-helpers';

const storageKey = 'ixly-auth';

export const initialState = {user: {}, token: null};

const set = reducer('AUTH.SET', (state, {payload}) => ({
  ...state,
  user: payload.user,
  token: payload.token
}));

const clear = reducer('AUTH.CLEAR', state => ({
  ...state,
  user: {id: '', role: '', email: ''},
  token: null
}));

const defaultCase = [T, state => state || initialState];

const persistedReducer = persistReducer(
  {key: storageKey, storage},
  cond([set, clear, defaultCase])
);

export default persistedReducer;
