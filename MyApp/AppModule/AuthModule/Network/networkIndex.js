import {AppConfig} from '../../../Config/config';
import {NETWORK_METHOD} from './networkWrapper';

export const AuthNetwork = {
  getUserData: payload => ({
    method: NETWORK_METHOD.POST,
    url: `${AppConfig.APP_API}/getUserDetails`,
    data: payload,
  }),
};
