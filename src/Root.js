import React from 'react';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import reducers from 'reducers';


const store = createStore(reducers, devToolsEnhancer());


function Root(props) {
    return (
    <Provider store={store}>
        {props.children}
    </Provider>
    )
}

export default Root
