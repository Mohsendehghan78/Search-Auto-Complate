import React, { useState } from 'react'
import "./Result.css"
function Result({result,getData}) {

    const[item,setItem]=useState(result.title)
    const clickHandler=()=>{
       setItem(result.title) 
       getData(item)
    }


  return (
     <div className='searchResult' onClick={clickHandler} >{result.title}</div>
    
   
  )
}

export default Result