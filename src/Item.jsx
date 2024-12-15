import {useState} from 'react'

const Item = ({ content }) => {
  const [isDone, setIsDone] = useState(false)

  return (
    <li>
      <input type="checkbox" onChange={
        () => {
          setIsDone(!isDone)

          // NOTE:こういう書き方でも同じ動きになる
          // 親Componentから子Componentに更新関数のみPropsで渡して、
          // 子Component側で状態更新処理しか行わない時は、下記の書き方をすることが多いと思う
          // setIsDone((prev)=>!prev)
        }
      }/>
      <span style={ {textDecoration: isDone ? 'line-through' : 'none'}}
      >{content}</span>
    </li>
  )
}

export default Item