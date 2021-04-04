import React from 'react'
import icons from './icons'

const Icon = ({ name, width, height, color, ...props }) =>
  name && (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={width || icons[name].width}
      height={height || icons[name.height]}
      viewBox={icons[name].viewBox}>
      {icons[name].paths?.map((path) => (
        <path key={path} d={path} fill={color || 'white'} fillRule="evenodd" />
      ))}
    </svg>
  )

export default Icon
