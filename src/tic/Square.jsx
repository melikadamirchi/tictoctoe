import React from 'react'

export default function Square({val,click}) {
  return (
    <div className='square' onClick={click}>{val}</div>
  )
}
