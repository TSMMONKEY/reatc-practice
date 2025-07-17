import React, { Component } from 'react';


class LifecycleB extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "Stevovo from lifecycleB"
            
        }
        console.log("constructor for lifecycle B");
    }
    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps for lifecycle B");
        return null
        
    }
    componentDidMount() {
        console.log("componentDidMount for lifecycle B");
      }
    
    shouldComponentUpdate(nextProps, nextState, nextContext){
        console.log(true);  
        return true;
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("getSnapshotBeforeUpdate for lifecycle B");
        return true;
    }
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log("componentDidUpdate for lifecycle B");
    }
    render() {
        const {children,ChangeNameHandler} = this.props
        return (
            <>
                {children}<br/>
                <button onClick={ChangeNameHandler}>Change Name</button>
            </>
        );
    }
}


export default LifecycleB;
