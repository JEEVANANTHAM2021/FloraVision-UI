import React from 'react'

const Button = ({text}) => {
  return (
    <div> 
      <button className='px-8 py-2.5 border border-white rounded-sm text-white font-light flex items-center cursor-pointer '>{text}</button>
    </div>
  )
}

export default Button
