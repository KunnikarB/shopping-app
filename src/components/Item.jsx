/* eslint-disable react/prop-types */
import { useState } from "react";
import { MdDeleteForever, MdEdit, } from "react-icons/md";
import Card from "./Card";
import Checkbox from "./Checkbox";
import { MdShoppingCart } from "react-icons/md";

//Items function it accepts three props: todo, handleDelete, and editTodo.

const Item = ({todo, handleDelete, editTodo}) => {
  const [completed, setCompleted] = useState(todo.completed);

  const handleChange = (e) => {
    setCompleted(e.target.checked);
  }
//style
  return (
    <Card >
      <div>

          <MdShoppingCart style={{ color: "#fff", marginRight: ".5rem",  }} />
          {todo.title}
        
          <MdEdit style={{ color: "orange", marginRight: ".5rem", marginLeft: "2rem" }} onClick={() => editTodo(todo) }/>
          
          <MdDeleteForever style={{ color: "magenta", marginRight: ".5rem" }} onClick={() => handleDelete(todo.id) }/>

          <Checkbox 
          label={completed === true ? "Completed" : "Shop?"} value={completed} onChange={handleChange} />
      </div>    
    </Card>
  );
};
//export item
export default Item;