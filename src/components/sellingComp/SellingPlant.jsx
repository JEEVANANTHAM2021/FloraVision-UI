import React from 'react'
import SectionTitle from '@/components/reuseComp/SectionTitle'
import GlassCard from '@/components/reuseComp/GlassCard'
import { images } from '@/assets/assets'

const plants = [
  {
    src: images.plant1,
    title: "Aglaonema plant",
    desc: "The Aglaonema plant, commonly known as Chinese Evergreen -- attractive foilage and easy care.",
    price: '300'

  },
   {
    src: images.plant2,
    title: "Plantain Lilies",
    desc: "Hostas are primarily grown for their lush, decorative leaves, which come in a wide variety of shapes, sizes,",
    price: '380'

  },
   {
    src: images.plant3,
    title: "Cactus",
    desc: "It is known for their ability to thrive in arid environments",
    price: '259'

  },
   {
    src: images.plant4,
    title: "Swiss cheese Plant",
    desc: "It is a popular tropical houseplant known for its distinctive, perforated leaves",
    price: '400'

  },
   {
    src: images.plant5,
    title: "Sansevieria plant",
    desc: "It is a popular indoor plant admired for its striking appearance and low-maintenance nature..",
    price: '450'

  },
   {
    src: images.plant6,
    title: "Agave plant",
    desc: "The Agave plant is a genus of succulent plants known for their striking rosette of thick, fleshy leaves and architectural forms.",
    price: '300'

  },
]

const SellingPlant = () => {
  return (
    <section className='min-h-screen px-6 py-16'>
        <div className='text-center text-3xl mb-20'>
            <SectionTitle text1={'Our'} text2={'Top'} text3={'Selling Plants'}/>
        </div>
      
      {/* Grid --> GlassCard for Selling Plant's && Mapping Plants details with key  */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20">
        {plants.map((p, idx) => (
          <div key={idx} className="relative flex flex-col items-center">
            <div className="absolute -top-16 z-20">
              <img src={p.src} alt={p.title} className="w-48 sm:w-40 lg:w-48 object-contain drop-shadow-2xl"/>
            </div>
     
     {/* Description && Price block */}
            <GlassCard className="w-[300px] min-h-[330px] pt-20 p-6 rounded-[40px] border border-white/20 bg-black backdrop-blur-3xl shadow-2xl text-white">
              <h2 className="text-lg font-semibold mt-16">{p.title}</h2>
              <p className="text-sm text-white/80 mt-2">
                {p.desc.length > 90 ? p.desc.slice(0, 90) + "..." : p.desc}
              </p>
              
      {/* Price && Cart icon */}
              <div className="flex justify-between items-center mt-6">
                <p className="text-md font-semibold">Rs. {p.price}/-</p>
                <div className="w-10 h-10 flex items-center justify-center border border-white/40 rounded-xl">
                  <img src={images.bagIcon} alt="cart_icon" className="w-5 h-5 opacity-80"/>
                </div>
              </div>
            </GlassCard>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SellingPlant
