import store from "../store";

export const requestMiddleware = ({ dispatch, getState }) => next => action => {
  if (action.request) {
    const myRequest = fetch(`http://localhost:3000${action.request.url}`);

    next(action.request.onStart());

    myRequest
      .then(res => res.json())
      .then(response => {
        next(action.request.onSuccess(response, action.request.title));
        if (action.type === "SEARCH_CITY") {
          next(action.request.addHistory());
        }
      })
      .catch(error => next(action.request.onFail(error)));
  } else {
    typeof action === "function"
      ? action(store.dispatch, store.getState)
      : next(action);
  }
};
