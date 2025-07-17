import React, { Component } from 'react';
import ChildComponent from './ChildComponent';
import Memo from './Memo';

class ParentComponet extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: "this is the Parent Being changed to a new state",
            name: 'Johan'
        }

        this.messageChangeHandler = this.messageChangeHandler.bind(this);
    }

    messageChangeHandler(age){
        alert(`my name is ${this.state.name} and I'm ${age} years old`)
        this.setState({
            message: "this is the Parent changed!!!"
        })
    }
   
    render() {
        return (
            <div>
                This is the Parent Component...
                <Memo name = {this.state.name}>
                    <button>Change Name</button>
                </Memo>
                {/* <ChildComponent messageChangeHandler = {this.messageChangeHandler} message = {this.state.message} /> */}
            </div>
        );
    }
}

export default ParentComponet;
