import { useState } from "react";

const slides = [
  {
    id: 1,
    number: "01",
    category: "Bed Room",
    title: "Inner Peace",
    image: "/src/assets/Bed Room.png",
  },
  {
    id: 2,
    number: "02",
    category: "Dining Room",
    title: "Warm Gather",
    image: "/src/assets/Dining Room.png",
  },
  {
    id: 3,
    number: "03",
    category: "Dining Room",
    title: "Natural Light",
    image: "/src/assets/wallDining.png",
  },
  {
    id: 4,
    number: "04",
    category: "Study Room",
    title: "Focus Zone",
    image: "/src/assets/Focuse Zoon.png",
  },
];

export default function Inspirations() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  const mainSlide = slides[current];
  const nextSlide = slides[(current + 1) % slides.length];
  const nextNextSlide = slides[(current + 2) % slides.length];

  return (
    <section
      className="w-full overflow-hidden py-16"
      style={{ backgroundColor: "#FCF8F3", fontFamily: "'Poppins', serif" }}>
      <div className="flex items-center max-w-7xl mx-auto px-8 gap-0">

        <div className="w-[422px] pr-10 shrink-0">
          <h2
            className="text-[40px] font-bold leading-tight text-[#3A3A3A] mb-4">
            50+ Beautiful rooms inspiration
          </h2>
          <p className="text-[#616161] text-[16px] leading-[150%] mb-8 max-w-[368px]">
            Our designer already made a lot of beautiful prototipe of rooms that inspire you
          </p>
          <button className="bg-[#B88E2F] hover:bg-[#9a7526] transition-colors text-white 
          text-sm font-semibold px-10 py-4 tracking-wide w-[176px]">
            Explore More
          </button>
        </div>

        <div className="flex-1 flex items-stretch gap-0 relative overflow-hidden" style={{ height: "580px" }}>

          <div className="relative shrink-0 overflow-hidden" style={{ width: "420px" }}>
            <img
              src={mainSlide.image}
              alt={mainSlide.title}
              className="w-full h-full object-cover transition-all duration-500"/>
           
            <div className="absolute bottom-0 left-0 right-0  px-6 flex">
              <div className=" mb-[24px]  w-[217px] ml-[24px] bg-white/90  pt-4 pb-5 px-6">
              <div className="flex items-center gap-3 text-sm text-[#898989] mb-1">
                <span>{mainSlide.number}</span>
                <span className="w-10 h-px bg-[#898989] inline-block" />
                <span>{mainSlide.category}</span>
              </div>
              <div className="flex items-end justify-between">
                <h3 className="text-2xl font-bold text-[#3A3A3A]">{mainSlide.title}</h3>
                
              </div>
            </div>
            <button
                  onClick={next}
                  className="bg-[#B88E2F] hover:bg-[#9a7526] transition-colors text-white 
                  w-12 h-12 flex items-center mt-11 justify-center shrink-0" >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" 
                  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" 
                  strokeLinejoin="round" className="lucide 
                  lucide-arrow-right-icon lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </button>
            </div>
            
          </div>

          <div
            className="relative shrink-0 overflow-hidden cursor-pointer"
            style={{ width: "340px", marginLeft: "2px" }}
            onClick={next}>
            <img
              src={nextSlide.image}
              alt={nextSlide.title}
              className="w-full h-[470px] object-cover"/>
          </div>

          <div
            className="relative shrink-0 overflow-hidden cursor-pointer"
            style={{ width: "120px", marginLeft: "2px" }}
            onClick={next}>
            <img
              src={nextNextSlide.image}
              alt={nextNextSlide.title}
              className="w-full h-[470px] object-cover"/>
            
          </div>
          
          
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-lg w-12 h-12 
            rounded-full flex items-center justify-center hover:bg-gray-50 transition z-10">
            <svg className="w-5 h-5 text-[#3A3A3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
      </div>
      <div className=" relative flex justify-end max-w-7xl mx-auto px-8 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? "w-6 h-3 bg-[#B88E2F]"
                : "w-3 h-3 bg-[#D8D8D8] hover:bg-[#B88E2F]/50"
            }`}
          />
        ))}
      </div>

      
      
    </section>
  );
}