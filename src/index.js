import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

const formReducer = (state = [], action) => {
    if (action.type === 'GET_FEEDBACK') {
        return [
            action.payload
        ]
    }
    return state;
}

const defaultForm = {
    feeling: 0,
    understanding: 0,
    support: 0,
    comments: '',
}

const feedbackReducer = (state = defaultForm, action) => {
    if (action.type === 'ADD_FEELING') {
        return {
            ...state,
            feeling: parseInt(action.payload)
        }
    } else if (action.type === 'ADD_UNDERSTANDING') {
        return {
            ...state,
            understanding: parseInt(action.payload)
        }
    } else if (action.type === 'ADD_SUPPORT') {
        return {
            ...state,
            support: parseInt(action.payload)
        }
    } else if (action.type === 'ADD_COMMENTS') {
        return {
            ...state,
            comments: action.payload
        }
    } return state;
}

    const storeInstance = createStore(
            combineReducers({
                formReducer,
                feedbackReducer
            }),
            applyMiddleware(logger)
        );


    ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
    registerServiceWorker();