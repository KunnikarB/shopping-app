import Item from './Item';
import PropTypes from 'prop-types';
// reusable list
const List = ({ todo, handleDelete }) => {
  // message if no items in the shopping list
  if (!todo || todo.length === 0) {
    return <p>No List</p>;
  }
  return (
    <div className="todo-list">
      {todo.map((item) => (
        <Item key={item.id} todo={item} handleDelete={handleDelete} />
      ))}
    </div>
  );
};
// propTypes is set to todo and handleDelete
List.propTypes = {
  todo: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
// export
export default List;