import React from 'react'
import SectionTitle from '@/components/reuseComp/SectionTitle'
import GlassCard from '@/components/reuseComp/GlassCard'
import { images } from '@/assets/assets'

const Testimonials = () => {
  return (
    <section className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">

    {/* Text--> Element */}
        <div className="text-center text-3xl mb-18">
          <SectionTitle text1={"Customer"} text2={"Review"} />
        </div>

    {/* Testimonials--> Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12 lg:mt-4">
          
    {/* Testimonial-1 ---> Card */}
          <GlassCard 
            clipped 
            className="h-full min-h-[330px] flex flex-col justify-start p-6">
            <div className="flex items-center gap-6 mb-5">
              <img className="w-16 h-16 object-cover rounded-full" src={images.testimonial} alt="customer-1" />
              <div>
                <h3 className="font-semibold text-2xl text-white">Shelly Russel</h3>
                <div className="text-yellow-400">★★★★<span className='text-yellow-200'>★</span></div>
              </div>
            </div>
            <p className="font-normal text-xl text-white/90 leading-relaxed">
              Just got my hands on some absolutely awesome plants, 
              and I couldn't be happier!
            </p>
          </GlassCard>

    {/* Testimonial-2 ---> Card */}
          <GlassCard clipped className="h-full min-h-[330px] flex flex-col justify-start p-6">
            <div className="flex items-center gap-6 mb-5">
              <img className="w-16 h-16 object-cover rounded-full" src={images.testimonial2} alt="customer-2" />
              <div>
                <h3 className="font-semibold text-2xl text-white">Lula Rolfson</h3>
                <div className="text-yellow-400">★★★★<span className='text-yellow-200'>★</span></div>
              </div>
            </div>
            <p className="font-normal text-xl text-white/90 leading-relaxed">
              Each one has its own unique charm and personality, and they’ve already 
              started brightening up my space. The vibrant colors and fresh greenery 
              make such a huge difference in my home.
            </p>
          </GlassCard>

    {/* Testimonial-3 ---> Card */}
          <GlassCard clipped className="h-full min-h-[330px] flex flex-col justify-start p-6">
            <div className="flex items-center gap-6 mb-5">
              <img className="w-16 h-16 object-cover rounded-full" src={images.testimonial3} alt="customer-3" />
              <div>
                <h3 className="font-semibold text-2xl text-white">Carol Huels</h3>
                <div className="text-yellow-400">★★★★<span className='text-yellow-200'>★</span></div>
              </div>
            </div>
            <p className="font-normal text-xl text-white/90 leading-relaxed">
              It's like bringing a little piece of nature indoors. Definitely worth 
              the investment—my plant collection has never looked better!
            </p>
          </GlassCard>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
