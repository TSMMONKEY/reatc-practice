import React, { Children, Component } from 'react';

class ClassComp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "johan",
            names: ['fire', 'joan', 'frida'],
            loggedIn: true
        }
    }

    ChangeName(){
        this.setState({
            username: 'James'
        }, ()=> console.log(this.state.username))
    }
    
    render() {
        const {children} = this.props;
        const names = this.state.names.map((name,index)=><h2 key={index}>{name}</h2>)
        const styleSheet = {
            color: 'green',
            fontSize: '105px',
        }

       return  this.state.loggedIn ? (
            <>
                <h1 className='primary'>Hi My name is {this.state.username}</h1>
                <button onClick={()=>this.ChangeName()}>Click Me</button>
            </>
        ) : (
            <>
                <ul>
                    <li>{names}</li>
                </ul>
            </>
        )
        return (
            <div>
                <div>
                    <ul>
                        <li>{names}</li>
                    </ul>
                </div>
                {children}
            </div>
        );
    }
}

export default ClassComp;
