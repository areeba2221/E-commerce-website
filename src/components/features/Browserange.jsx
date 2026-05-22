import React from "react";
import maskGroup from "/src/assets/Mask Group.png"
import maskGroup1 from "/src/assets/Mask Group (1).png"
import livingRoom from "/src/assets/Image-living room.png"

const BrowseRange = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title justify-center items-center flex font-bold text-[32px]">
            Browse The Range</h2>
        <p className="section-subtitle justify-center items-center flex mb-12 text-[#666666] text-[20px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
         
            <div className="group cursor-pointer card-hover rounded-sm overflow-hidden">
                <img 
                          src={maskGroup} 
                          alt="Background"  />
                <h2 className="mt-7.5 flex justify-around items-center text-[#333333] text-[24px] font-semibold">
                    Dining</h2>
            </div>

            <div className="group cursor-pointer card-hover rounded-sm overflow-hidden">
                <img 
                          src={livingRoom} 
                          alt="Background"  />
                <h2 className="mt-7.5 flex justify-around items-center text-[#333333] text-[24px] font-semibold">
                    Living</h2>
            </div>

            <div className="group cursor-pointer card-hover rounded-sm overflow-hidden">
                <img 
                          src={maskGroup1} 
                          alt="Background"  />
                <h2 className="mt-7.5 flex justify-around items-center text-[#333333] text-[24px] font-semibold">
                    Bedroom</h2>
            </div>
          
        </div>
      </div>
    </section>
  );
};

export default BrowseRange;