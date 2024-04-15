import React from 'react'
import {useState} from 'react'
function Usestate() {
//HOOKS : hooks in  react enable functional component to use state and lilfestyle features .
 

// USESTATE :  ` usestate()` in react that allows you to mannage the state in functional components. 

//SYNTAX :  import {usestate} from "react"
 // const [nam,setname] = usestate("") --> const[variable : store the value,function : to update the value]

 const [count, setcount] = useState(0); //count is assigned a value but never used.
 function increasevalue(){
    setcount((prev)=> prev +1);
  }
  function decreasevalue(){
    setcount((prev)=> prev -1);
  }
  function show(){
    alert(`your value is: ${count}`);
  }
  function addValue(){
    const value = prompt("please enter tour value:")
    setcount(value);
  }
  




  return (
    <div>
      <h1>USESTATE:</h1>
      <h2>count:{count}</h2>
      <button onClick={increasevalue}>add</button>
      <button onClick= {decreasevalue}>reduce</button>
      <button onClick={show}>show</button>
      <button onClick={addValue}> add value</button>

    </div>
  )
};

export default Usestate
