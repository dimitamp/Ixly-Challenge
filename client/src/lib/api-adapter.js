import ky from 'ky';
import {path} from 'ramda';
import {store} from '../plugins/initialize-store';
import actions from '../actions';
import {checkIsAuthenticated} from './utilities';

const serverUrl = 'http://localhost:4000/api/v1';

export const prefixUrl = route => `${serverUrl}/${route}`;

export const api = ky.create({
  timeout: 20000,
  hooks: {
    beforeRequest: [
      req => {
        const state = store.getState();
        if (checkIsAuthenticated(state)) {
          req.headers = {
            ...req.headers,
            Authorization: `Bearer ${path(['auth', 'token'], state)}`,
            ...(req.body instanceof FormData
              ? {}
              : {'content-type': 'application/json'})
          };
        }
      }
    ],
    afterResponse: [
      async response => {
        try {
          if (!response.ok) {
            const json = await response.clone().json();
            store.dispatch(actions.ui.addError(json));
          }
        } catch (error) {
          // eslint-disable-next-line no-console
          console.error(error);
        }
        return response;
      }
    ]
  }
});
