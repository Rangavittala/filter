import './App.css';
import Header from './header'
import React, { useState, useEffect } from 'react';
import Datatable from './datatable/index'

function App() {
  const [data, setData] = useState([]);
  const [q, setQ] = useState('');

  
  useEffect(()=>{
      fetch('fees.json')
      .then((response) => response.json())
      .then((json) => setData(json))
  },[]);

  function search (rows) {
    
    return rows.filter(
      (row) => 
        row.adm_no.toLowerCase().indexOf(q) > -1 ||
        row.usn.toLowerCase().indexOf(q) > -1 ||
        row.name.toLowerCase().indexOf(q) > -1 ||
        // row.branch.toLowerCase().indexOf(q) > -1 ||
        // row.course.toLowerCase().indexOf(q) > -1 ||
        // row.afs.toLowerCase().indexOf(q) > -1 ||
        row.cay.toLowerCase().indexOf(q) > -1
        // row.total_due < row.c_dmnd
      );
  
    
  }

  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <div>
        <input type="text" placeholder="Search.. USN / account_no / name" value={q} onChange={(event) => setQ(event.target.value)}></input>
        <p>Or</p>
        <select>
          <option>Course ...</option>
          <option>BE</option>
          <option>M.Tech</option>
          <option>MBA</option>
          <option>MCA</option>
        </select>
        <select>
          <option>CAY ...</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </select>
        <select>
          <option>filter by due</option>
          <option>total_due >= 50 %</option>
          <option>hostel >= 50 %</option>
          <option>total_due >= 50 %</option>
        </select>
        <br/><br/>
      </div>
      <Datatable data = {search(data)}/>     
    </div>
  );
}

export default App;
