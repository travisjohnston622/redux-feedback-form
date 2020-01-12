import React, { Component } from 'react';
import { connect } from 'react-redux';

class Support extends Component {
    state = {
        support: '',
    }

    changeField = (event, infoKey) => {
        this.setState({
            [infoKey]: event.target.value
        });
    }

    submitSupport = (event) => {
        event.preventDefault();
        if (!this.state.support) {
            alert("Must enter a number!")
        } else {
            this.props.dispatch({
                type: 'ADD_SUPPORT',
                payload: this.state,
            });

            this.props.history.push('/comments');
        }
    }
    render() {
        return (
            <div>
                <h1>Do you feel supported?</h1>
                <form onSubmit={this.submitSupport}>
                    <input
                        type="number"
                        placeholder="Do you feel supported?"
                        value={this.state.support}
                        onChange={(event) => this.changeField(event, 'support')}
                    />
                    <button>NEXT</button>
                </form>
            </div>

        );
    }
}

export default connect()(Support);