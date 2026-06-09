import { shopHeroData } from "/src/data/Data";
import { RightArrow } from "/src/assets/Svg";
import logo from "/src/assets/Logo 1.png";

const CartHero = () => {
    return (
        <div className="relative w-full h-64 md:h-72 overflow-hidden">
      <img
        src={shopHeroData.image}
        alt="Shop banner"
        className="absolute inset-0 w-full h-full object-cover"/>

     
      <div className="absolute inset-0 " />

      <div className="flex justify-center items-center mt-15 py-6 gap-3">
            <img
        src={logo}
        alt="Shop banner"
        className="absolute  w-19.25 h-19.25 object-cover"/>
        </div>

     
      <div className="relative z-10 flex flex-col items-center justify-center  gap-3">
        
        
     
        <h1 className="text-black text-[48px] md:text-5xl font-medium leading-[100%]">
          Cart
        </h1>

        
        <nav className="flex items-center gap-2">
          <a
            href="/"
            className="text-[#000000] text-[16px] hover:text-[#C8A96E]
            font-medium leading-[100%] transition-colors duration-200">
            {shopHeroData.breadcrumb.home}
          </a>
          <RightArrow/>
          
          <span className="text-[#000000] text-[16px] font-light leading-[100%]">
            Cart</span>
        </nav>
      </div>
    </div>
    );
}

export default CartHero;