import React, { Component } from 'react';

class HoverCounterTwo extends Component {

    render() {
        const {count,handleClick} = this.props
        return (
            <div>
                <h2 onMouseOver={handleClick}>Hovered Over {count} amount of times</h2>
            </div>
        );
    }
}

export default HoverCounterTwo;
