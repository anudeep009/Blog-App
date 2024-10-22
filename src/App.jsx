import React from "react"
import { BrowserRouter,Route,Routes } from "react-router-dom"
import Layout from '../Layout.jsx'
import { Home } from "../Exports.js"

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />}/>
      {/* other routes goes here */}
      </Route>
    </Routes>
    </BrowserRouter>
  )
}