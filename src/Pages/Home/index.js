import React from 'react'
import Featured from '../../Components/Featured'
import Hero from "../../Components/Hero"
import "./home.css"

const Home = () => {
  return (
    <div className="home">
      <Hero/>
      <Featured/>
    </div>
  )
}

export default Home