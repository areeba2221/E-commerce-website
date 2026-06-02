// import heroimage from '/src/assets/Rectangle 1.png';
import { shopHeroData } from "/src/Data/data";
import { RightArrow } from "/src/assets/Svg";

const ShopHeroSection = () => {
    return (
        <div className="relative w-full h-64 md:h-72 overflow-hidden">
      <img
        src={shopHeroData.image}
        alt="Shop banner"
        className="absolute inset-0 w-full h-full object-cover"/>

     
      <div className="absolute inset-0 " />

     
      <div className="relative z-10 flex flex-col items-center justify-center h-full gap-3">
     
        <h1 className="text-black text-[48px] md:text-5xl font-medium leading-[100%]">
          {shopHeroData.title}
        </h1>

        
        <nav className="flex items-center gap-2">
          <a
            href="/"
            className="text-[#000000] text-[16px] hover:text-white 
            font-medium leading-[100%] transition-colors duration-200">
            {shopHeroData.breadcrumb.home}
          </a>
          <RightArrow/>
          
          <span className="text-[#000000] text-[16px] font-light leading-[100%]">
            {shopHeroData.breadcrumb.current}</span>
        </nav>
      </div>
    </div>
    );
}

export default ShopHeroSection;