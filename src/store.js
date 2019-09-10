import { createStore, applyMiddleware } from 'redux';
import { searchCityFail, searchCitySuccess, searchCityStarted} from './actions/getLocationAction';
import reducer from './reducers';

const logger = store => next => action => {
  console.log('dispatching', action);
  console.log('next state', store.getState());

  let result = next(action);
  return result;
}

const requestMiddleware = ({ dispatch, getState }) => (next) => (action) => {
  if (action.type === 'REQUEST') { 
    const myRequest = fetch(action.payload.url);      

    next(searchCityStarted());

    myRequest
      .then(res => res.json())
      .then(response => next(searchCitySuccess(response)))
      .catch(error => next(searchCityFail(error)));

  } else {
    typeof action === 'function' ?
    action(store.dispatch, store.getState) :
    next(action);
  }
}

const store = createStore(reducer, applyMiddleware(requestMiddleware, logger));

export default store;
