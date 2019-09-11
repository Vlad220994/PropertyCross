import store  from '../store';

export const requestMiddleware = ({ dispatch, getState }) => (next) => (action) => {
  if (action.request) { 
    const myRequest = fetch(action.payload.url);

    next(action.payload.onStart());

    myRequest
      .then(res => res.json())
      .then(response => next(action.payload.onSuccess(response)))
      .catch(error => next(action.payload.onFail(error)));

  } else {
      typeof action === 'function' ?
      action(store.dispatch, store.getState) :
      next(action);
  }
}
