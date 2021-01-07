import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createRootReducer from "../reducers";


export default function configureStore() {
  const rootReducer = createRootReducer();
  const store = createStore(rootReducer, applyMiddleware(thunk));

  return store;
}
