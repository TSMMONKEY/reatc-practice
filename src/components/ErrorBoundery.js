import React, { Component } from 'react';

class ErrorBoundery extends Component {

    constructor(props) {
        super(props)
        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error){
        return {
            hasError: true
        }
    }

    componentDidCatch(error, info){
        console.log(error);
        console.log(info);
        
    }
    render() {
        const {children,} = this.props
        if (this.state.hasError) {
            return (
                <div>
                    <h1>Error has Been stopped</h1>
                </div>
            ); 
        }
        return children;
    }
}

export default ErrorBoundery;
