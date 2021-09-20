import React, {useState} from "react";

const InputTodo = props => {
    const [inputText, setinputText] = useState({
        title: ""
    })

    const onChange = e => {
        setinputText({
            ...inputText,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        if(inputText.title.trim()){
            props.addTodoProps(inputText.title)
            setinputText({
                title: "",
            })
        }else {
            alert("Please write Item")
        }
    }
    return (
        <form onSubmit={handleSubmit} className="form-container">
            <input
            type="text"
            className="input-text"
            value={inputText.title}
            name="title"
            onChange={onChange}
            >
            </input>
            <button className="input-submit">Submit</button>
        </form>
    )
}

export default InputTodo