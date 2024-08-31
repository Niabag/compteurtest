import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

ReactDOM.render(
  <div className="align-page">
    <BrowserRouter>
      <Routes>
        <Route path="/kasa" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </div>,
  document.getElementById('root')
)
