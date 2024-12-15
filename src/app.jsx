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

  return (
    <>
      <h1>Todo App</h1>
      <Form todos={todos} setTodos={setTodos} />
      <List todos={todos} />
    </>
  )
}

export default App