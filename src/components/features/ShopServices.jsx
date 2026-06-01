   import React from 'react';
   import { Trophy, BadgeCheck, Shipping, Services } from "/src/assets/Svg";

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="flex items-center justify-center gap-2 ">
      <div className="shrink-0 text-neutral-800">
        {icon}
      </div>
      
      <div className="flex flex-col">
        <h3 className="text-[25px] font-semibold text-[#242424] leading-[150%]">
          {title}
        </h3>
        <p className="text-[20px] text-[#898989] font-medium leading-[150%] mt-0.5">
          {description}
        </p>
      </div>
    </div>
  );
};


const ShopServices = () => {
    return (
     
<div className='pt-20'>
    <div className="w-full h-68 bg-[#FAF3EA]  py-22 px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6  justify-center items-center">
        
        <FeatureCard
          title="High Quality"
          description="crafted from top materials"
          icon={<Trophy/>}/>

        <FeatureCard
          title="Warranty Protection"
          description="Over 2 years"
          icon={ <BadgeCheck/>} />

        <FeatureCard
          title="Free Shipping"
          description="Order over 150 $"
          icon={ <Shipping/> }/>

        <FeatureCard
          title="24 / 7 Support"
          description="Dedicated support"
          icon={ <Services/> } />

      </div>
    </div>
    </div>
  
    );
}
 
export default ShopServices;