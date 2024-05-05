




const Home = () => {
    const [todo, setTodo] = useState([]);
    // Get the data from the server
    const fetchItems = async () => {
        const response = await fetch("http://localhost:6001/items");
        const data = await response.json();
        setTodo(data);
    };

    useEffect(() => {
        fetchItems();
    }, []);

    // Add item to the server
    const addTodo = (newItem) => {
        newItem.id = uuidv4();
        setTodo([newItem, ...todo]);
    };

    const deleteTodo = (id) => {
        if(window.confirm('Are you sure you want to delete this item?')) {
            // Delete item from the server 
            setTodo(todo.filter((item) => item.id !== id));
        }
    
    }

    return (
        <div className='container'>
            <Form addTodo={addTodo} />
            <List todo= {todo} handleDelete={deleteTodo} />
        </div>
    );
};

export default Home;

