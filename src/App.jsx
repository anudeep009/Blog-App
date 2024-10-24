import React from "react"
import { BrowserRouter,Route,Routes } from "react-router-dom"
import Layout from '../Layout.jsx'
import { Home, Blogs, Categories, Profile, Bookmarks } from "../Exports.js"

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Home />}/>
      <Route path="/blogs" element={<Blogs />}/>
      <Route path="/categories" element={<Categories />}/>
      <Route path="/bookmarks" element={<Bookmarks />}/>
      <Route path="/profile" element={<Profile />}/>
      {/* other routes goes here */}
      </Route>
    </Routes>
    </BrowserRouter>
  )
}