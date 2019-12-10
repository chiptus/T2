import { WalletState } from '../../types/store';
import {
  SET_WALLET,
  SET_WALLET_FILENAME,
  SET_WALLET_LOCATION,
  SET_PASSWORD,
  SET_IDENTITIES,
  ADD_NEW_IDENTITY,
  UPDATE_IDENTITY,
  WalletActionTypes
} from './types';

const defaultState: WalletState = {
  identities: [],
  password: '',
  walletFileName: '',
  walletLocation: ''
};

export function walletReducer(state: WalletState = defaultState, action: WalletActionTypes) {
  switch (action.type) {
    case SET_WALLET:
      return { ...state, ...action.payload };
    case SET_WALLET_FILENAME:
      return { ...state, walletFileName: action.walletFileName };
    case SET_WALLET_LOCATION:
      return { ...state, walletLocation: action.walletLocation };
    case SET_PASSWORD:
      return { ...state, password: action.password };
    case SET_IDENTITIES:
      return { ...state, identities: action.identities };
    case ADD_NEW_IDENTITY: {
      return { ...state, identities: [...state.identities, action.identity] };
    }
    case UPDATE_IDENTITY: {
      const { publicKeyHash } = action.identity;
      const stateIdentities = [...state.identities];
      const indexFound = stateIdentities.findIndex(
        identity => publicKeyHash === identity.publicKeyHash
      );

      if (indexFound > -1) {
        stateIdentities[indexFound] = action.identity;
        return { ...state, identities: [...state.identities] };
      }
      return state;
    }
    default:
      return state;
  }
}