import React from 'react'
import {useEffect, useState} from 'react'

function Useeffect() {
//USEFECT: `useEffect()` is a react hook to perform the side effects in functional component.

//SYNTAX: use
const [count, setCount] = useState(0); //count is assigned a value but never used.
useEffect(() =>{
  setTimeout(()=>{
    setCount((prev) => prev + 1);
  },1000);
},[]);//[]: empty array dependency : it renders only once.




  return (
    <div>
      <h1>USEEFFECT : </h1>
    <h2>COUNTER VALUE: {count}</h2>
    </div>
  )
}

export default Useeffect
