import React, { Component } from 'react';

class ClickCounterTwo extends Component {

    render() {
        const {count, handleClick} = this.props
        return (
            <div>
                <button onClick={handleClick}>Clicked {count} amount of times</button>
            </div>
        );
    }
}

export default ClickCounterTwo;
