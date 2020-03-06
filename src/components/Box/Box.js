import React from 'react'
import './styles.sass'

function Box(props) {

  let {height, width, content, className} = props

  const colours = ['#aaa', '#999', '#666', '#444', '#555']

  const pickRandomColour = () => {
    return colours[Math.floor(Math.random() * colours.length)]

  }

  const box = () => {
    return (
      <svg
        className="text-box"
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        style={{strokeDasharray: (width + height) * 2, strokeDashoffset: (width + height) * 2}}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={`M0 0 L0 ${height} L${width} ${height} L${width} 0 Z`}
              stroke={pickRandomColour()}
              stroke-width="2">
        </path>
      </svg>
    )
  }


  return (
    <div className={'text-wrapper ' + className}>
      {box()}
      <div className="text-element" style={{width: width, height: height}}>
        {content}
      </div>
    </div>
  )
}

export default Box
