import React from 'react'
import GlassCard from '@/components/reuseComp/GlassCard'
import Button from '@/components/reuseComp/Button'
import { images } from '@/assets/assets'

// Param for plant details passed here...
const PlantCard = ({ src, title, desc, price }) => {
  return (
<section>
        <div className='max-w-sm z-10 absolute overflow-hidden pointer-events-none'>
            <img src={src} alt={title} className='relative w-full h-full object-cover object-center block'/>
        </div>
    {/* Product---> Details && Image Card */}
    <GlassCard clipped>
        <div className='mt-30 space-y-4'>
            <h3 className='text-4xl font-normal'>{title}</h3> 
            <p className='text-base font-normal'>{desc}</p>
            <p className='text-base font-normal'>RS {price}</p>
        <div className='flex items-center justify-between'>
                <Button text={'Buy Now'} />
            <div className="w-10 h-10 rounded-sm border border-white">
                <img className="p-1" src={images.bagIcon} alt="cart_icon" />
            </div>
        </div>
        </div>
    </GlassCard>
</section>
  )
}

export default PlantCard
