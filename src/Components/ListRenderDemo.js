import React from 'react'
import { ChildListDemo } from './ChildListDemo'
 const ListRenderDemo = () => {

    let a = ['shrath','bharath','dsdsds']
  return (
    <div>
        {/* {
            a.map((ele,index)=><h1 key={index}>{ele}</h1>)
        } */}

    {a.map((ele,index)=>
        <ChildListDemo values = {ele} index={index} />)}
    </div>
  )
}

export default ListRenderDemo;
