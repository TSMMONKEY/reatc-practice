import React from 'react'

const withCounter = (WrappedComponent, IncrimentNumber)=>{
    class WithCounter extends React.Component{
        constructor(props) {
            super(props)
            this.state = {
                count: 0
            }
        }
        IncrimentCounter = ()=>{
            this.setState(prevState=>{
                return {
                    count: prevState.count + IncrimentNumber
                }
            })
        }
        render(){
            const {count} = this.state
            return <WrappedComponent count={count} IncrimentCounter={this.IncrimentCounter} {...this.props}/>
        }
    }
    return WithCounter
}

export default withCounter