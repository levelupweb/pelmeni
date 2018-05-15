import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from './reducers';

const emptyState = {
  shop: {
    cart: null
  },
}

const defaultState = typeof window !== "undefined" && window.localStorage.getItem("state")
  ? JSON.parse(window.localStorage.getItem("state"))
  : emptyState;

const store = createStore(
  reducers, 
  defaultState, 
  composeWithDevTools(applyMiddleware(thunk))
);

store.subscribe(() => {
  const { shop } = store.getState();
  window.localStorage.setItem("state", JSON.stringify({ shop }))
});

export default store;