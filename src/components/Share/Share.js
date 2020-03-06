import React from 'react'
import './styles.sass'
import Circle from '../Circle/Circle'
import Box from '../Box/Box'

function Share() {
  return (
    <div className="flex row mx-5">
      <Circle number={3}/>
      <div className="flex column">
        <Box width={100} height={40} content={<h2>Share</h2>}/>
        <Box width={305} height={50} content={<p>Share your shop on print-outs or through word of mouth</p>}/>
        <Box width={150} height={40}
             content={
               <button className="uk-button uk-button-default" style={{width: 150, height: 40}}>Learn more</button>
             }/>
      </div>
    </div>
  )
}

export default Share
