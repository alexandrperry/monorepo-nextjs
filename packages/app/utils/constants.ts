type LocalStorageKeys = {
  [index: string]: string;
};

export const LOCAL_STORAGE_KEYS: LocalStorageKeys = {
  CARD: 'CARD'
};

export enum REQUEST_STATUS {
  INIT = 'INIT',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}
