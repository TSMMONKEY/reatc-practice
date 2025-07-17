import React, { Component } from 'react';
import withCounter from './withCounter';

class ClickCounter extends Component {
    render() {
        // const {count} = this.state;
        const {count, IncrimentCounter, name} = this.props;
        return (
            <div>
                <button onClick={IncrimentCounter}>Clciked {count} amount of times by {name}</button>
            </div>
        );
    }
}

export default withCounter(ClickCounter, 5);
