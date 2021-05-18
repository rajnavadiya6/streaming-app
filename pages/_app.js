import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk'

import { reducer, initialState } from '../store/Reducers';

import '../styles/globals.css'

const store = createStore(
  reducer,
  initialState,
  applyMiddleware(thunkMiddleware),
);


function MyApp({ Component, pageProps }) {
  return <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
}

export default MyApp