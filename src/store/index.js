import { compose, applyMiddleware, createStore, combineReducers } from 'redux';
import { routerMiddleware, connectRouter } from 'connected-react-router';
import thunk from 'redux-thunk';

import { History as history } from 'helpers';
import randomUserReducer from './randomUser/reducers';
const routeMiddleware = routerMiddleware(history);

const rootReducer = combineReducers({
	randomUser: randomUserReducer,
	router: connectRouter(history),
});

const store = createStore(rootReducer, compose(applyMiddleware(thunk, routeMiddleware)));

export { history, store };
