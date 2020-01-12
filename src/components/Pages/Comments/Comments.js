import React, { Component } from 'react';
import { connect } from 'react-redux';

class Comments extends Component {
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
    
    render() {
        return (
            <div>
                <h1>Do you have any comments?</h1>
                <form onSubmit={this.submitComments}>
                    <input
                        type="text"
                        placeholder="Have any comments?"
                        value={this.state.comments}
                        onChange={(event) => this.changeField(event, 'comments')}
                    />
                    <button>NEXT</button>
                </form>
            </div>

        );
    }
}

export default connect()(Comments);