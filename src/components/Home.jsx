import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import List from './List';
import Form from "./Form";
import '../index.css';
import { Toggle }  from "./Toggle";
import useLocalStorage from "use-local-storage";    

const Home = () => {
    const [todo, setTodo] = useState([]);

    // Get the data from the server


    const fetchItems = async () => {
        const response = await fetch("http://localhost:6001/items");
        const data = await response.json();
        setTodo(data);
    };

    // fetch data from the server
    useEffect(() => {
        fetchItems();
    }, []);
    
    // Add a new item to the list


   

    const addTodo = (newItem) => {
        newItem.id = uuidv4();
        setTodo([newItem, ...todo]);
    };

    const deleteTodo = (id) => {
        if(window.confirm('Are you sure you want to delete this item?')) {

            // Delete the item from the list
            setTodo(todo.filter((item) => item.id !== id));
        }
    }

    const preference = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [isDark, setIsDark] = useLocalStorage("isDark", preference);

    return (

    <div className='App' data-theme={isDark ? "dark" : "light"} >
        <Toggle 
          isChecked={isDark}
          handleChange={() => setIsDark(!isDark)}
        />



        <div className='container'>
            <Form addTodo={addTodo} />
            <List todo= {todo} handleDelete={deleteTodo} />
        </div>

    </div>
    );
};

export default Home;

   

