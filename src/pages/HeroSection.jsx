import heroBackground from '../assets/herosection.jpg';

const Hero = () => {
  return (
    // Added relative to the section container
    <section className="relative min-h-screen w-full flex items-center justify-center p-4 overflow-hidden">
      
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBackground} 
          alt="Background"  
          className="w-full h-full object-cover" 
        />
      </div>
            
   
      <div className="relative ml-[660px] bg-[#FFF3E3] p-10 max-w-[643px] w-full h-[443px]
      shadow-md backdrop-blur-sm bg-opacity-95">
        
        <p className="uppercase tracking-[5px] text-gray-700 font-semibold mb-4">
          New Arrival
        </p>

        <h1 className="text-[52px] md:text-6xl w-[559px] h-[127px] font-bold text-[#B88E2F] leading-(65px) mb-6 ">
          Discover Our  New Collection
        </h1>

        <p className="text-[#333333] text-[18px] leading-relaxed mb-10 max-w-xl font-medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
        </p>

        
        <button className="bg-[#B88E2F] hover:bg-[#a87b20] text-white font-bold px-10 py-4 transition duration-300">
          BUY NOW
        </button>
      </div>

    </section>
  );
};

export default Hero;