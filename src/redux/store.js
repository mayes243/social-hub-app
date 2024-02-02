import reducer from './reducers';
import {configureStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

const store = configureStore({
  reducer: reducer,
//   middleware: getDefaultMiddleware => getDefaultMiddleware().concat(thunk),
});

export default store;
