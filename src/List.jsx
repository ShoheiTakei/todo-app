import Item from './Item'

const List = ({ todos, deleteTodo }) => {
  return (
    <ul>
      {
        todos.map((todo) => {
          return (
            <Item key={todo.id} content={todo.content} id={todo.id} deleteTodo={deleteTodo} /> 
          )
        })
      }
    </ul>
  )
}

export default List