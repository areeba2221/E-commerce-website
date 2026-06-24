import heroBackground from '/src/assets/herosection.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center p-4 overflow-hidden">
      
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBackground} 
          alt="Background"  
          className="w-full h-full object-cover"  />
      </div>      
   
      <div className="relative ml-166 rounded-xl mt-8 bg-[#FFF3E3] p-10 max-w-160 w-full h-110
      shadow-md backdrop-blur-sm bg-opacity-95">
        
        <p className="uppercase tracking-[5px] text-gray-700 font-semibold mb-4">
          New Arrival
        </p>

        <h1 className="text-[52px] md:text-6xl w-139.75  font-bold text-[#B88E2F] leading-(65px)">
          Discover Our
        </h1>
        <h1 className="text-[52px] md:text-6xl w-139.75  font-bold text-[#B88E2F] leading-(65px) mb-5 ">
          New Collection
        </h1>

        <p className="text-[#333333] text-[18px]  mb-12 leading-(24px) max-w-136.5 font-medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
        </p>

        
        <a 
        href='/shop'
        className="bg-[#B88E2F] hover:bg-[#a87b20] text-white font-bold px-10 py-4 transition duration-300">
          BUY NOW
        </a>
      </div>

    </section>
  );
};

export default Hero;