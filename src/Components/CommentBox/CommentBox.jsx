import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';

function CommentBox(props) {

    const [ values, setValues ] = useState('')

    const handleChange = (event) => {
        event.persist();

        setValues(values => ({...values, [event.target.name]: event.target.value}));
        console.log(values.userInput)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(values.userInput)
        props.saveComment(values.userInput);

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

export default connect(null, actions)(CommentBox);