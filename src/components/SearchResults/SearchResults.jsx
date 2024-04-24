import React from 'react'
import "./SearchResults.css"
import Result from '../Result/Result';
function SearchResults({results ,selectedData}) {
 
    const getData=(data)=>{
      selectedData(data)
    }

    
  return (

    <div className=' results'>
        {results.map((result,id)=>{
            return  <Result getData={getData} result={result} key={id}/>        
        })}
    </div>
    
   
    
  )
}

export default SearchResults