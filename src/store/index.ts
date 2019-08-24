import {createStore} from 'redux';
import {reducer} from './reducer';

const initialState = {};
export const store = createStore(reducer, initialState);
