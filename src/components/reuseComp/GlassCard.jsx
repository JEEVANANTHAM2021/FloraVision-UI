import React from 'react'

const GlassCard = ({ children, className = '', clipped = false }) => {

  {/* ClipPath for Card */}
  const clipPathStyle = clipped //clipped to use in particular components with actual ratio of card
  ? {
      clipPath:'polygon(0% 0%, 50% 5.49%, 100% 0%, 100% 100%, 0% 100%)', 
    }: {}
  return (
    <div className={`relative max-w-auto mx-auto`}>
    <div className={`relative rounded-4xl bg-white/4 border border-white/18 backdrop-blur-sm shadow-md p-8 ${className}`} 
    style={clipPathStyle}>
      {children}
    </div>
    </div>
  )
}

export default GlassCard
