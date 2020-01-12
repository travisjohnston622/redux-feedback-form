import React, { Component } from 'react';
import { connect } from 'react-redux';

class Feeling extends Component {
    state = {
        feeling: '',
    }

    changeField = (event, infoKey) => {
        this.setState({
            [infoKey]: event.target.value
        });
    }
    
    submitFeeling = (event) => {
        event.preventDefault();
        if (!this.state.feeling) {
            alert( "Must enter a number!" )
        }else {
            this.props.dispatch({
                type: 'ADD_FEELING',
                payload: this.state,
            });

            this.props.history.push( '/understanding' );
        }
    }
    render() {
        return (
            <div>
                <h1>How are you feeling</h1>
                <form onSubmit={this.submitFeeling}>
                    <input
                        type="number"
                        placeholder="How are you feeling?"
                        value={this.state.feeling}
                        onChange={(event) => this.changeField(event, 'feeling')}
                    />
                    <button>NEXT</button>
                </form>
            </div>

        );
    }
}

export default connect()(Feeling);