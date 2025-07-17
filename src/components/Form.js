import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            textarea: "",
            topics: ['react', 'vue', 'js'],
        }
    }

    changeHandler = (event)=>{
        this.setState({
            username: event.target.value
        })
    }
    textareChangeHandler = (event)=>{
        this.setState({
            textarea: event.target.value
        })
    }
    

    formSubmit = (event) =>{
        console.log(this.state.topics)
        event.preventDefault()
    }
    render() {
        const topics = this.state.topics.map((topic)=><option value={topic}>{topic}</option>)
        return (
            <div>
                <div>
                    <form onSubmit={this.formSubmit} style={{marginTop: "50px"}}>
                        <div>
                            <label>Username: </label>
                            <input type='text' value={this.state.username} onChange={(event)=>this.changeHandler(event)}/>
                        </div>
                       <div><br></br>
                            <label>Textarea: </label>
                            <textarea type='text' value={this.state.textarea} onChange={(event)=>this.textareChangeHandler(event)}/>
                       </div><br></br>
                       <div><br></br>
                            <select value="vue">
                                {topics}
                            </select>
                       </div><br></br>
                        <button type='submit'>Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Form;
