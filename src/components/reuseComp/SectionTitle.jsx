import React from 'react'

const SectionTitle = ({text1, text2, text3, text4}) => {
  return (
    <div className='inline-flex text-center px-3'>
      {/* Text param is assigned for Section Title */}
      <div className='w-10 h-10 border-b-2 border-l-2 rounded-bl-2xl'></div>
        <p className='text-white font-semibold'>{text1} {text2} {text3} {text4}</p>
      <span className='w-10 h-10 border-t-2 border-r-2 rounded-tr-2xl'></span>
    </div>
  )
}

export default SectionTitle
