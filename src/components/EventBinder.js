import React, { Component } from 'react';


class EventBinder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: 'Hello'
        }
        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler(){
        this.setState({
            message: "awe ma sekint"
        }, ()=> console.log(this.state.message))
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={this.clickHandler}>Click Me</button>
            </div>
        );
    }
}


EventBinder.propTypes = {

};


export default EventBinder;
