import React from "react";
import SectionTitle from "@/components/reuseComp/SectionTitle";
import GlassCard from "@/components/reuseComp/GlassCard";
import { images } from "@/assets/assets";
import Button from "@/components/reuseComp/Button";

const TrendyPlant = () => {
  return (
    <section className="min-h-screen max-w-7xl mx-auto mt-8 px-4 lg:px-0">
      {/* Title */}
      <div className="text-4xl font-semibold text-center">
        <SectionTitle text1={"Our"} text2={"Trendy"} text3={"Plants"} />
      </div>

      {/* Trendy Section --> Card*/}
      <GlassCard className="mt-10 mx-auto w-full min-h-[400px] p-6 flex flex-col items-center justify-center gap-4 relative overflow-hidden rounded-3xl 
          lg:mt-10 lg:ml-6 lg:w-[1200px] lg:min-h-[280px] lg:px-10 lg:py-14 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:overflow-visible lg:rounded-[86px]">
        
      {/* Image Block --> Left */}
        <img className="w-48 h-auto object-contain drop-shadow-xl z-10 lg:w-110 lg:h-auto lg:absolute lg:-left-6 lg:-bottom-2"
          src={images.plant2}
          alt="Trendy_plant"/>

      {/* Content --> Right */}
        <div className="text-white max-w-xs text-center z-20 lg:ml-auto lg:max-w-sm lg:text-left">
          <h1 className="text-xl font-semibold">For Your Desks Decorations</h1>
          <p className="text-sm mt-3 opacity-80">
            I recently added a beautiful desk decoration plant to my workspace,
            and it has made such a positive difference!</p>
          <p className="text-lg font-semibold mt-4">Rs. 599/-</p>
        
      {/* div --> Button && Cart */}
          <div className="flex gap-3 items-center mt-3 justify-center lg:justify-start">
            <Button text={"Explore"} />
            <div className="w-10 h-10 rounded-sm border border-white flex items-center justify-center">
              <img className="w-5 h-5" src={images.bagIcon} alt="cart_icon" />
            </div>
          </div>
        </div>
      </GlassCard>

      {/* Trendy section --> Card2 */}
      <GlassCard className="mt-12 mx-auto w-full min-h-[400px] p-6 flex flex-col items-center justify-center gap-4 relative overflow-hidden rounded-3xl 
          lg:mt-22 lg:ml-6 lg:w-[1200px] lg:min-h-[280px] lg:px-10 lg:py-14 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:overflow-visible lg:rounded-[86px]">
        
      {/* Content --> left */}
        <div className="text-white max-w-xs text-center z-20 lg:max-w-sm lg:text-left">
          <h1 className="text-xl font-semibold">For Your Desks Decorations</h1>
          <p className="text-sm mt-3 opacity-80">
            The greenery adds a touch of nature and serenity to my desk,
            making it feel more inviting and calming.</p>
          <p className="text-lg font-semibold mt-4">Rs. 399/-</p>

      {/* Button && Cart */}
          <div className="flex gap-3 items-center mt-3 justify-center lg:justify-start">
            <Button text={"Explore"} />
            <div className="w-10 h-10 rounded-sm border border-white flex items-center justify-center">
              <img className="w-5 h-5" src={images.bagIcon} alt="cart_icon" />
            </div>
          </div>
        </div>

      {/* Image Block --> Right */}
        <img className="w-48 h-auto object-contain drop-shadow-xl z-10 lg:w-110 lg:h-auto lg:absolute lg:-right-6 lg:-bottom-10"
          src={images.heroPlant}
          alt="Trendy_plant"/>
      </GlassCard>
    </section>
  );
};

export default TrendyPlant;
