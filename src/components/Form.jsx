import PropTypes from 'prop-types'; 
import { useState } from 'react';

import Button from './Button';
import { GoTasklist } from "react-icons/go";

// addTodo is a prop that is passed from App.js
const Form = ({addTodo}) => { 
// state to store the title of the todo
const [title, setTitle] = useState("");
// function to handle the submit event
const handleSubmit = (e) => {
    e.preventDefault(); 

    const newTodo = {
        title,   
    }
    // call the addTodo function and pass the newTodo as an argument
    addTodo(newTodo);
    // reset the title to an empty string
    setTitle("");
};

return (
    
    
        <form onSubmit={handleSubmit}>
         <div className="card">
            <h1><GoTasklist />Add a list</h1>
            <label>
              <input value={title} type="text" onChange={(e) => setTitle(e.target.value)} />
            </label>
            
            <Button className="btn" type="submit"></Button>
          </div>
        </form>
    
);
}

Form.propTypes = {
    addTodo: PropTypes.func.isRequired,
};

export default Form;