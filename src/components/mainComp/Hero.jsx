import React from 'react'
import { images } from '@/assets/assets'
import Button from '@/components/reuseComp/Button'
import GlassCard from '@/components/reuseComp/GlassCard'


const Hero = () => {
  return (
    <main className="min-h-screen max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between relative overflow-hidden">
      {/* ------------ Main content of Page ------------ */}
      {/* Text Area --> left */}
      <div className="w-full lg:w-1/2 text-center lg:text-left mt-20 text-white">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold mb-3 lg:-ml-2">Earth's Exhale</h1>
        <p className="text-sm sm:text-base opacity-80 leading-relaxed max-w-md mx-auto lg:mx-0 lg:-ml-2">
          "Earth Exhale" symbolizes the purity and vitality of the Earth's
          natural environment and its essential role in sustaining life.</p>

      {/* Button Component && Play tab */}
        <div className="mt-6 flex items-center justify-center lg:justify-start gap-4 lg:-ml-2">
          <Button text={"Buy Now"} />
          <div className="w-10 h-10 sm:w-12 sm:h-12 flex cursor-pointer items-center justify-center border border-white rounded-full">
            <div className="text-white text-xl">▶</div>
          </div>
          <p className='text'>Live Demo...</p>
        </div>

      {/* Customer review Card */}
        <div className="max-w-sm mx-auto lg:mx-0 mt-14 p-2 lg:-ml-4">
          <GlassCard className="flex flex-col gap-3">
            <div className="flex items-center gap-6">
              <img className="w-14 h-14 object-cover rounded-full" src={images.msgCardImg} alt="Reviewer"/>
              <div className="flex flex-col">
                <h1 className="text-white text-lg font-semibold">Ronnie Hamill</h1>
                <div className="text-yellow-400">★★★★<span className='text-yellow-200'>★</span></div>
              </div>
            </div>
            <p className="text-white opacity-90 text-sm leading-relaxed">
              I can't express how thrilled I am with my new natural plants! They
              bring such a fresh and vibrant energy to my home.
            </p>
          </GlassCard>
        </div>
      </div>

      {/* Main --> Plant Card */}
      <div
        className="w-full lg:w-1/2 flex justify-center lg:justify-end relative mt-14 lg:mt-0 overflow-visible left-1/4 -translate-x-1/4 ">
      {/* Image block --> Floated */}
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 sm:left-1/2 sm:-translate-x-1/2 z-20 pointer-events-none">
          <img src={images.plant1} className="w-[450px] sm:w-[300px] lg:w-[270px] drop-shadow-2xl mt-6" alt="Aglaonema Plant"/>
        </div>

      {/* GlassCard Component --> bg-blur */}
        <GlassCard clipped className="w-full max-w-[360px] sm:max-w-[380px] lg:max-w-[350px] min-h-[400px] p-10 pt-48 mx-auto overflow-hidden relative left-1/2 -translate-x-1/2 lg:left-1/2 lg:-translate-x-1/2">
          <p className="text-sm opacity-80 mt-1">Indoor Plant</p>
          <h3 className="text-2xl font-semibold tracking-wide mb-4">Aglaonema Plant    
            <span className='cursor-pointer'>{'>'}</span>
          </h3>
          <button className="px-5 py-2 border border-white/60 rounded-xl text-white/90 hover:bg-white/40 transition">
            Buy Now
          </button>

      {/* Slider Dots --> bottom */}
          <div className="flex items-center gap-2 mt-8 justify-center">
            <div className="w-10 h-2 rounded-full bg-white/80 hover:bg-blue-400"></div>
            <div className="w-2 h-2 rounded-full bg-white/50 hover:bg-blue-400"></div>
            <div className="w-2 h-2 rounded-full bg-white/50 hover:bg-blue-400"></div>
          </div>
        </GlassCard>
      </div>
    </main>
  )
}

export default Hero
