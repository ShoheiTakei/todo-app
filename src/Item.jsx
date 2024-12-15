const Item = ({content}) => {
  return (
    <li>
      <input type="checkbox" />
      <span>{content}</span>
    </li>
  )
}

export default Item