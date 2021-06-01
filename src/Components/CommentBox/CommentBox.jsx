import React, { useState, useEffect } from 'react'

function CommentBox() {

    const [ values, setValues ] = useState('')

    const handleChange = (event) => {
        event.persist();

        setValues(values => ({...values, [event.target.name]: event.target.value}));
        console.log(values);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        setValues({userInput: ''})
    }

    return (
        <form onSubmit={handleSubmit}>
            <h4>Add A Comment</h4>
            <textarea name="userInput" value={values.userInput} onChange={handleChange}  />
            <div> 
                <button>Submit Comment</button>
            </div>
        </form>
    )
}

export default CommentBox
