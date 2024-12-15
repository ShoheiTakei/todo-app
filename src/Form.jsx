import {useState} from 'react'

const Form = ({addTodo}) => {
  const [value, setValue] = useState('')

  const handleSubmit = e => {
    // ブラウザの動作で、formの送信時は、デフォルトの挙動がリロードなので、そのリロードをキャンセルする意味でpreventDefault()を実行する
    e.preventDefault()
    
    // フィールドが未入力時にSubmitされた時はAlertを出して早期リターン
    if (!value) {
      return window.alert('入力してください')
    }
    
    addTodo(value)
    
    // content更新後、入力値初期化する
    setValue('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text"
        value={value}
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