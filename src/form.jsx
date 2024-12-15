import {useState} from 'react'

const Form = ({todos, setTodos}) => {
  const [value, setValue] = useState('')

  const handleSubmit = e => {
    // ブラウザの動作で、formの送信時は、デフォルトの挙動がリロードなので、そのリロードをキャンセルする意味でpreventDefault()を実行する
    e.preventDefault()
    
    setTodos([
      ...todos,
      {
        content: value
      }
    ])
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text"
        onChange={
          e => {
            setValue(e.target.value)
        }
      }
      />
    </form>
  )
}

export default Form;