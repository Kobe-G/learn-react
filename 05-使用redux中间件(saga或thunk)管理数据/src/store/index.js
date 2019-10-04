import {applyMiddleware, createStore} from 'redux';
import reducer from './reducer';
// import thunk from 'redux-thunk';
import mySaga from './saga';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(mySaga);

export default store;