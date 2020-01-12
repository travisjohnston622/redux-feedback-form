import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import  mapStoreToProps from '../../redux/mapStoreToProps';

class Admin extends Component {

    componentDidMount() {
        this.getFeedbackForm();
    }

    getFeedbackForm = () => {
        axios({
            method: 'GET',
            url:'/feedback'
        })
        .then((response) => {
            this.props.dispatch({
                type: 'GET_FEEDBACK',
                payload: response.data,
            })
        })
        .catch((err) => {
            console.warn(err);
        })
    }
    render() {
        const formArray = this.props.store.map((item, index) => {
            return (
                <div>
                    <h1>Please fill out your feedback form!</h1>
                    <p>{item.feeling}</p>
                    <p>{item.understanding}</p>
                    <p>{item.support}</p>
                    <p>{item.comments}</p>
                </div>
            )
        });
        return (
        <div>{formArray}</div>
        )
    }
}
export default connect(mapStoreToProps)(Admin);