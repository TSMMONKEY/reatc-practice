import React, { Component } from 'react';
import LifecycleB from './LifecycleB';


class LifecycleA extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "Stevovo"

        }
        this.ChangeNameHandler = this.ChangeNameHandler.bind(this);
        console.log("constructor for lifecycle A");
    }
    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps for lifecycle A");
        return null

    }
    componentDidMount() {
        console.log("componentDidMount for lifecycle A");
    }
    shouldComponentUpdate(nextProps, nextState, nextContext){
        console.log(true);
        return true; 
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("getSnapshotBeforeUpdate for lifecycle A");
        return true;
    }
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log("componentDidUpdate for lifecycle A");
    }

    ChangeNameHandler(){
        this.setState({
            name: "Joe Santos"
        })
    }
    render() {
        console.log("Component A Rendered");
        
        return (
            <div>
                {this.props.children}
                <LifecycleB ChangeNameHandler={this.ChangeNameHandler}>
                    Lifecycle B with {this.state.name}
                </LifecycleB>
            </div>
        );
    }
}


LifecycleA.propTypes = {

};


export default LifecycleA;
