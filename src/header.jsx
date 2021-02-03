import React from 'react'
import nmit_logo from './nmit_logo.png';
import nitte_logo from './nitte_logo.png';

export default function Header() {
    return (
        <>
        <div className="header">
            <img src={nitte_logo} className="App-logo-1" alt="logo" />
            <h1>Nitte Meenakshi Institute of Technology</h1>
            <img src={nmit_logo} className="App-logo" alt="logo" />
        </div>
        <h3>Fee due list</h3>
        </>
    )
}
