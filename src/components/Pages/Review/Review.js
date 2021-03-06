import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class Review extends Component {
    state = {
        comments: '',
    }

    changeField = (event, infoKey) => {
        this.setState({
            [infoKey]: event.target.value
        });
    }

    submitComments = (event) => {
        this.props.dispatch({
            type: 'ADD_COMMENTS',
            payload: this.state,
        });

        this.props.history.push('/review');
    }

    submitReview = () => {
        this.postForm(this.props.store.feedbackReducer);
    }

    postForm(newForm) {
        axios({
            method: 'POST',
            url: '/feedback',
            data: newForm
        })
            .then((response) => {
                this.props.history.push('/');
            })
            .catch((err) => {
                console.warn(err);
            });
    }

    render() {
        return (
            <div>
                <h1>Please Review Your Feedback!</h1>
                <p>How your feeling: {this.props.store.feedbackReducer.feeling}</p>
                <p>How your understanding the material: {this.props.store.feedbackReducer.understanding}</p>
                <p>How supported you feel: {this.props.store.feedbackReducer.support}</p>
                <p>Your comments: {this.props.store.feedbackReducer.comments}</p>
                <button onClick={this.submitReview}>Submit Feedback</button>
            </div>
        );
    }
}
export default connect(mapStoreToProps)(Review);