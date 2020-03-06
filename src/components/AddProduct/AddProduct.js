import React from 'react'
import './styles.sass'
import Circle from '../Circle/Circle'
import Box from '../Box/Box'

function AddProduct() {
  return (
    <div className="flex row mx-5 mb-3">
      <Circle number={2}/>
      <div className="flex column">
        <Box width={270} height={40} content={<h2>Add your products</h2>}/>
        <Box width={250} height={25} content={<p>You can add as many as you wish</p>}/>
        <Box width={150} height={40} className="" content=
          {<button className="uk-button uk-button-default" style={{width: 150, height: 40}}>Learn more</button>}/>
      </div>
    </div>
  )
}

export default AddProduct
