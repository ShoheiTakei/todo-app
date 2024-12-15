import React from "react"
import Item from './Item'

const List = () => {
  return (
    <ul>
      <Item content={'課題をする'} />
      <Item content={'選択をする'} />
      <Item content={'電話をする'}/>
    </ul>
  )
}

export default List