import React, { Component } from 'react';
import { connect } from 'react-redux';

class Understanding extends Component {
    state = {
        understanding: '',
    }

    changeField = (event, infoKey) => {
        this.setState({
            [infoKey]: event.target.value
        });
    }

    submitUnderstanding = (event) => {
        if (!this.state.understanding) {
            alert("Must enter a number!")
        } else {
            this.props.dispatch({
                type: 'ADD_UNDERSTANDING',
                payload: this.state,
            });

            this.props.history.push('/support');
        }
    }
    render() {
        return (
            <div>
                <h1>How solid is your understanding?</h1>
                <form onSubmit={this.submitFeeling}>
                    <input
                        type="number"
                        placeholder="How well do you understand?"
                        value={this.state.understanding}
                        onChange={(event) => this.changeField(event, 'understanding')}
                    />
                    <button>NEXT</button>
                </form>
            </div>

        );
    }
}

export default connect()(Understanding);