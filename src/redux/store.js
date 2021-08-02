import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';

import { dappletsReducer } from './reducers';

const reducers = combineReducers({
    dapplets: dappletsReducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;