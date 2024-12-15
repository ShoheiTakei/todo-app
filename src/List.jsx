import Item from './Item'

const List = ({ todos, deleteTodo, toggleIsDone }) => {
  return (
    <ul>
      {
        todos.map((todo) => {
          console.log(todo)
          return (
            <Item key={todo.id} id={todo.id} content={todo.content} isDone={todo.isDone} deleteTodo={deleteTodo} toggleIsDone={toggleIsDone} /> 
          )
        })
      }
    </ul>
  )
}

export default List