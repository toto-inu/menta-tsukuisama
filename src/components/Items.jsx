import React from 'react'
import { Item } from './Item'

export const Items = ({ children, contents }) => {
  return (
    <div>
      {children}
      {contents.map((content) => {
        return <Item content={content} />
      })}
    </div>
  )
}

// const handleCheck = () => {
//   setChecked(!checked)
// }

// <TodoItem item={"item"} onCheck={handleCheck} />

// <Button label="追加" />

// const Button = ({label}) => {
//   return (
//     <button>{label}</button>
//   )
// }
