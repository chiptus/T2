// import { setData, getData } from '../../localData';
import { AppState } from '../../types/store';
import {
  SET_IS_LOADING,
  LOGOUT,
  SET_LEDGER,
  SET_IS_LEDGER_CONNECTIONG,
  WALLET_IS_SYNCING,
  ADD_NEW_VERSION,
  SET_NODES_STATUS,
  UPDATE_FETCHED_TIME,
  CHANGE_ACCOUNT_HASH,
  AppActionTypes
} from './types';

const initState: AppState = {
  isLedger: false,
  isLedgerConnecting: false,
  isLoading: false,
  isWalletSyncing: false,
  nodesStatus: {
    conseil: -1,
    tezos: -1
  },
  time: new Date(),
  newVersion: '',
  selectedAccountHash: '',
  selectedParentHash: '',
  selectedParentIndex: 0,
  selectedAccountIndex: 0,
  isManager: true
};

export function appReducer(state: AppState = initState, action: AppActionTypes) {
  switch (action.type) {
    case SET_IS_LOADING:
      return { ...state, isLoading: action.isLoading };
    case SET_NODES_STATUS:
      return { ...state, nodesStatus: action.nodesStatus };
    case UPDATE_FETCHED_TIME:
      return { ...state, time: action.time };
    // case LOGOUT:
    //   return defaultState;
    case SET_LEDGER:
      return { ...state, isLedger: action.isLedger };
    case SET_IS_LEDGER_CONNECTIONG:
      return { ...state, isLedgerConnecting: action.isLedgerConnecting };
    case WALLET_IS_SYNCING:
      return { ...state, isWalletSyncing: action.isWalletSyncing };
    case ADD_NEW_VERSION:
      return { ...state, newVersion: action.newVersion };
    case CHANGE_ACCOUNT_HASH:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}