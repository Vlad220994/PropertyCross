import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';

import { requestMiddleware } from './middleware/requestMiddleware';
import reducer from './reducers';

const store = createStore(reducer, applyMiddleware(requestMiddleware, logger));

export default store;
