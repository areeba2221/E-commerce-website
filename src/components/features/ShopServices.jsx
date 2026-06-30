import React from "react";
import { Trophy, BadgeCheck, Shipping, Services } from "/src/assets/Svg";

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="flex items-center gap-4">
      <div className="shrink-0 text-neutral-800">{icon}</div>

      <div>
        <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#242424] leading-tight">
          {title}
        </h3>

        <p className="text-sm sm:text-base lg:text-lg text-[#898989] font-medium">
          {description}
        </p>
      </div>
    </div>
  );
};

const ShopServices = () => {
  return (
    <section className="pt-10 md:pt-16 lg:pt-20">
      <div className="w-full bg-[#FAF3EA] py-10 md:py-14 lg:py-16 px-4 sm:px-6 lg:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-10">
          <FeatureCard
            title="High Quality"
            description="Crafted from top materials"
            icon={<Trophy />}
          />

          <FeatureCard
            title="Warranty Protection"
            description="Over 2 years"
            icon={<BadgeCheck />}
          />

          <FeatureCard
            title="Free Shipping"
            description="Order over $150"
            icon={<Shipping />}
          />

          <FeatureCard
            title="24 / 7 Support"
            description="Dedicated support"
            icon={<Services />}
          />
        </div>
      </div>
    </section>
  );
};

export default ShopServices;
