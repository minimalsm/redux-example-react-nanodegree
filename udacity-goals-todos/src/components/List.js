import React from 'react'

const List = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <li key={item.id}>
          <span onClick={() => props.toggle && props.toggle(item.id)}
            style={{textDecoration: item.complete ? 'line-through' : 'none'}}>
            {item.name}
          </span>
          <button onClick={() => props.remove(item)}>
            X
          </button>
        </li>
      ))}
    </ul>
  )
}

export default List