import React, { useState } from "react";

function ToDoItem(props){
  const [isDone,setIsDone] = useState(false)

  function handleOnclick(){
    setIsDone(prevValue =>{
      return !prevValue
    })
  }

  return <div onClick={handleOnclick}>
    <li style = {{textDecoration : isDone? "line-through":"none"}}>
    {props.text}
  </li>
  </div>
}

export default ToDoItem