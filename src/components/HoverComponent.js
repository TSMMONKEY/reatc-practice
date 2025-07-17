import React, { Component } from 'react';
import withCounter from './withCounter';

class HoverComponent extends Component {
    render() {
        const {count, IncrimentCounter} = this.props;
        return (
            <div>
                <h2 onMouseOver={IncrimentCounter}>Hovered over me {count} times</h2>
            </div>
        );
    }
}

export default withCounter(HoverComponent, 15899);
