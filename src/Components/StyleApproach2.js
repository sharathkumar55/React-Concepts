import React from 'react'

export default function StyleApproach2() {

const colorFormat ={
    color:'red'
}
const fontFormat ={
fontSize:'100px'
}



  return (
    <>
    <h1 style={{...colorFormat,...fontFormat}}>Hello Sharath</h1>
    </>
  )
}
