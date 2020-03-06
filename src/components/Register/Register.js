import React from 'react'
import './styles.sass'
import Box from '../Box/Box'
import Circle from '../Circle/Circle'

function Register() {
  return (
    <div className="flex row mx-5 mb-3">
      <Circle number={1}/>
      <div className="flex column">
        <Box width={120} height={40} content={<h2>Register</h2>}/>
        <Box width={305} height={25} content={<p>Choose a name and fill in your information</p>}/>
        <Box width={150} height={40}
             content={
               <button className="uk-button uk-button-default" style={{width: 150, height: 40}}>Learn more</button>
             }/>
      </div>
    </div>
  )
}

export default Register
