import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import promiseMiddleware from './middlewares/promise';
import reducers from './reducers';
import functionMiddleware from './middlewares/function';
import timeoutMiddleware from './middlewares/timeout';
import intervalMiddleware from './middlewares/interval';

function init() {
    // Do not use devtools for production
    return createStore(reducers, {}, composeWithDevTools(applyMiddleware(timeoutMiddleware, intervalMiddleware, functionMiddleware, promiseMiddleware)));
}

export default {
    init
};
