import React from 'react'

export const ChildListDemo = (props) => {
  return (
    <div key={props.values.index}>{props.values}</div>
  )
}
