import React, { useState } from 'react'
import "./App.css"
import SearchBar from './components/SearchBar/SearchBar'
import SearchResults from './components/SearchResults/SearchResults'

function App() {

  const[results,setResults]=useState([])
const[data,setData]=useState("")
  const selectedData=(data)=>{
    setData(data)
  }
  

  return (
    <div className='app'>
      <div className='container'>
        <SearchBar data={data} setResults={setResults} />     
         <SearchResults selectedData={selectedData} results={results} />
      </div>
    </div>
  )
}

export default App
