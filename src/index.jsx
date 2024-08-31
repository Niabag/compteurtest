import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

ReactDOM.render(
  <div className="align-page">
        <Home />
  </div>,
  document.getElementById('root')
)
