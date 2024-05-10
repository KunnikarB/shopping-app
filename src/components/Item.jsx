/* eslint-disable react/prop-types */
import { useState } from "react";
import { MdDeleteForever, MdEdit, } from "react-icons/md";
import Card from "./Card";
import Checkbox from "./Checkbox";
import { FaShopify } from "react-icons/fa6";

//Items function it accepts three props: todo, handleDelete, and editTodo.
const Item = ({todo, handleDelete, editTodo}) => {
  const [completed, setCompleted] = useState(todo.completed);

  const handleChange = (e) => {
    setCompleted(e.target.checked);
  }
//style
  return (
    <Card >
      <div className="todo-list" >
        <div>
          <FaShopify style={{ color: "magenta", marginRight: ".2rem",  }} />
          {todo.title}
        
          <MdDeleteForever style={{ color: "magenta", marginLeft: "2rem" }} onClick={() => handleDelete(todo.id) }/>
        </div> 

          <Checkbox className="check-label"
          label={completed === true ? "Completed" : "Shop?"} value={completed} onChange={handleChange} />
      </div>   
    </Card>
  );
};
//export item
export default Item;