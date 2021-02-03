import './App.css';
import Header from './header'
import React, { useState, useEffect } from 'react';
import Datatable from './datatable'

function App() {
  const [data,setData]=useState([]);
  const getData=()=>{
    fetch('data.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setData(myJson)
      });
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <div>
      <header className="App-header">
        <Header/>
      </header>
      <Datatable data={data}/>   
    
    </div>
  );
}

export default App;