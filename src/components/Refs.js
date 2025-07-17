import React, { Component } from 'react';

class Refs extends Component {
    constructor(props) {
        super(props)

        this.inputRef = React.createRef();
    }

    componentDidMount(){
        this.inputRef.current.focus();
        console.log(this.inputRef);
        
    }
    ClickHandler(){
     alert(this.inputRef.current.value);
        
    }
    render() {
        return (
            <div>
                <input type='trext'style={{marginTop: '15px'}} ref={this.inputRef}/>
                <button onClick={()=>this.ClickHandler()}>Click</button>
            </div>
        );
    }
}

export default Refs;
