import {api, prefixUrl} from '../lib/api-adapter';

const authenticationApi = api.extend({prefixUrl: prefixUrl('oauth2')});

export const authenticateUser = (data) => authenticationApi.post('token', {json: data}).json();
