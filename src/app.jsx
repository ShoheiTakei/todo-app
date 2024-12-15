import Form from './Form'
import List from './List'

const App = () => {
  const todos = [
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
  ]

  return (
    <>
      <h1>Todo App</h1>
      <Form />
      <List todos={todos} />
    </>
  )
}

export default App