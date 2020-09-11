import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/container/app';
import store from "./mainstore";

window.onload = () => {
    const storeInstance = store.init();
    render(
        <Provider store={storeInstance}>
            <App />
        </Provider>,
        document.getElementById('app-container')
    );
};
