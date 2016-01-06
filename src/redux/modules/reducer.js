import { combineReducers } from 'redux';
import multireducer from 'multireducer';
import { routerStateReducer } from 'redux-router';
import {reducer as form} from 'redux-form';

export default combineReducers({
  router: routerStateReducer,
  form
});
