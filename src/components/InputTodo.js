import React, {Component} from "react";

class InputTodo extends Component {
    state = {
        title: ""
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    };

    handleSubmit = e => {
        e.preventDefault()
        if(this.state.title.trim()){
            this.props.addTodoProps(this.state.title)
            this.setState({
                title: ""
            })
        }else{
            alert("Please write Item")
        }
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    onChange={this.onChange} 
                    type="text" 
                    placeholder="Add Todo ..." 
                    name="title"
                    value={this.state.title}
                />
                <button>Submit</button>
            </form>
        )
    }
}

export default InputTodo