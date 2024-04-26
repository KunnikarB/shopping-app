/* eslint-disable react/prop-types */
import { useState } from 'react';
import Card from './Card';
import Button from './Button';

const Form = ({addTodo}) => { 
const [title, setTitle] = useState("");

const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
        title,   
    }

    addTodo(newTodo);
    setTitle("");
    

};

return (
    <Card create={true}>
        <form onSubmit={handleSubmit}>
         <div >
            <h2>Add a list</h2>
            <label>
              <input value={title} type="text" onChange={(e) => setTitle(e.target.value)} />
            </label>
            
            <Button type="submit"></Button>
           
          </div>
        </form>
    </Card>
);
}

export default Form;