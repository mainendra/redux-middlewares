import React from 'react';
import { render } from 'react-dom';
import App from './components/container/app';

window.onload = () => {
    render(
        <App />,
        document.getElementById('app-container')
    );
};
