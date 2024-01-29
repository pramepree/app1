
import React, { Component } from 'react'
import './App.css';
import { userContext } from './context'
import  Content  from './context-content';

export default function App() {
  return(
    <userContext.Provider value="Tom jeryy">
      <Content/>
      </userContext.Provider>
  )
}




