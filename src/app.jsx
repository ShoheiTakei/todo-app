import Form from './Form'
import List from './List'
import { useState } from 'react'
import { nanoid } from 'nanoid'

const App = () => {
  const [todos, setTodos] = useState([])

  const addTodo = content => {
    setTodos(
      [
        ...todos,
        {
          content: content,
          // DOC: https://www.npmjs.com/package/nanoid
          // ユニークid生成
          // ユニークの意味分かっているか確認
          id: nanoid(),
        }
      ]
    )
  }

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id))
    
    // イテレート (iteration)
    // iterationの和訳は「反復」
    // プログラムだと、処理の反復、繰り返しなどの意味する
  }

  return (
    <>
      <h1>Todo App</h1>
      <Form addTodo={addTodo}/>
      <List todos={todos}  deleteTodo={deleteTodo}/>
    </>
  )
}

export default App