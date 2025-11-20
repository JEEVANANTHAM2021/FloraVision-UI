import React from "react";
import Navbar from "@/components/mainComp/Navbar";
import Hero from "@/components/mainComp/Hero";
import TrendyPlant from "@/components/mainComp/TrendyPlant";
import SellingPlant from "@/components/sellingComp/SellingPlant";
import Testimonials from "@/components/reviewComp/Testimonials";
import BestPlant from "@/components/BestPlant";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <>
      <div
        className="relative w-full bg-local bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/assets/banner.jpg')`,
          backgroundSize: window.innerWidth < 640 ? "cover" : "100% auto",
          backgroundPosition: window.innerWidth < 640 ? "center top" : "center -280px",
        }}>
        <div>
          <Navbar />
          <Hero /> {/* Wrapped for BackGround image */}
          <TrendyPlant />
        </div>
      </div>
      <div className="bg-[#1B2316]">
        <SellingPlant />
        <Testimonials />
        <BestPlant />
        <Footer />
      </div>
    </>
  );
};

export default Home;
