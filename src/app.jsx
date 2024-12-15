import Form from './Form'
import List from './List'
import {useState} from 'react'

const App = () => {
  const [todos, setTodos] = useState([
    {
      content: '課題をする'
    },
    {
      content: '選択をする'
    },
    {
      content: '電話をする'
    },
    {
      content: '料理をする'
    }
  ])

  const addTodo = content => {
    setTodos(
      [
        ...todos,
        {
          content: content
        }
      ]
    )
  }

  return (
    <>
      <h1>Todo App</h1>
      <Form addTodo={addTodo} />
      <List todos={todos} />
    </>
  )
}

export default App