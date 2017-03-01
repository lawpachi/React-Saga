/**
 * Created by shenlu on 17/2/28.
 */
import { createStore, compose, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import rootSagas from '../saga'
import createSagaMiddleware from 'redux-saga';

export default function configureStore(initialState) {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(rootReducer, compose(
        applyMiddleware(
            sagaMiddleware,
        )
    ));
    sagaMiddleware.run(rootSagas)
    store.runSaga = sagaMiddleware.run;
    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextReducer = require('../reducers/index')
            store.replaceReducer(nextReducer)
        })
    }
    return store
}