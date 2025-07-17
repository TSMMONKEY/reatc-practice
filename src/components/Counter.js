import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    handleClick = () => {
        this.setState((prevState) => {
            return {count: prevState.count + 1}
        })
    }
    render() {
        const {render} = this.props
        const {count} = this.state
        return (
            <div>
                {render(count, this.handleClick)}
            </div>
        );
    }
}

export default Counter;
