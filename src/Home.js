import React, {useEffect} from 'react'
import './components/Box/styles.sass'
import './/animations.sass'
import Section from './components/Section/Section'
import Register from './components/Register/Register'
import AddProduct from './components/AddProduct/AddProduct'
import Share from './components/Share/Share'

function Home() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="page">
      <Section className="mt-5 mb-5"/>
      <Register/>
      <div className="left-align">
        <AddProduct/>
      </div>
      <Share/>
    </div>
  )
}

export default Home
