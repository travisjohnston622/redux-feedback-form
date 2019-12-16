import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

const feedbackReducer = (state= [], action) => {
    if (action.type === 'GET_FEEDBACK') {
        return [
            action.payload
        ]
    }
    return state;
}

const defaultFeedback = {
    feeling: '',
    understanding: '',
    support: '',
    comments:''
}

const feedbackFormReducer = (state = defaultFeedback, action) => {
    if (action.type === 'ADD_FEELING') {
        return {
            ...state,
            ...action.payload
    }
}else if (action.type === 'ADD_UNDERSTANDING') {
    return {
        ...state,
        ...action.payload
    }
    } else if (action.type === 'ADD_SUPPORT') {
        return {
            ...state,
            ...action.payload
        }
    } else if (action.type === 'ADD_COMMENTS') {
        return {
            ...state,
            ...action.payload
        }
    }
    return state;
}

    const storeInstance = 
    createStore(
        combineReducers({
            feedbackFormReducer,
            feedbackReducer
        }),
        applyMiddleware(logger)
    )


ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker()