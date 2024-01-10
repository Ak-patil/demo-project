import localforage from 'localforage';
import FilesystemStorage from 'redux-persist-filesystem-storage';
import {isWeb} from '../helperFunctions/helper-index';

const authPersistConfig = {
  key: 'authState',
  storage: isWeb() ? localforage : FilesystemStorage,
  blacklist: ['remainingRetry', 'loginLoader'],
};
