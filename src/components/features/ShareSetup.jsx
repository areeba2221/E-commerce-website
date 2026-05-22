import Shelfroom from '/src/assets/Rectangle 36.png';
import Diningroom from '/src/assets/Dining.png';
import Bedroom from '/src/assets/BedRoom.png';
import Brickwall from '/src/assets/wallDining.png';
import Frame from '/src/assets/Frame.png';
import Kitchen from '/src/assets/Kitchen.png';
import Desktop from '/src/assets/Desktop.png';
import Rectangle from '/src/assets/Rectangle 37.png';
import Vase from '/src/assets/Vase.png';


export default function ShareSetup() {
  return (
    <section className="w-full bg-white py-14 overflow-hidden select-none">
      <div className="text-center mb-8">
        <p className="text-[#616161] text-[20px] mb-2 tracking-wide font-medium" style={{ fontFamily: "'Poppins', sans-serif" }}>
          Share your setup with
        </p>
        <h2 className="text-[40px] font-bold text-[#3A3A3A] leading-[120%]" style={{ fontFamily: "'Poppins', sans-serif" }}>
          #FuniroFurniture
        </h2>
      </div>

      <div className="flex justify-center items-center gap-4 w-full min-w-[1700px] mx-auto h-[720px]">
        
        <div className="flex flex-col gap-4 items-end justify-center w-[510px] shrink-0">
          <div className="flex items-end gap-4 w-full">
            <div className="w-[80px] h-[382px] shrink-0 overflow-hidden group relative cursor-pointer rounded-sm">
              <img 
                src={Shelfroom} 
                alt="Shelf room" 
                className="w-full h-full object-cover object-right transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </div>
            <div className="w-[414px] h-[312px] shrink-0 overflow-hidden group relative cursor-pointer rounded-sm">
              <img 
                src={Desktop} 
                alt="Desk setup with laptop and radio" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </div>
          </div>
          
          <div className="flex items-start gap-4 w-full">
            <div className="w-[180px] h-[323px] shrink-0 overflow-hidden group relative cursor-pointer rounded-sm">
              <img 
                src={Rectangle} 
                alt="Vintage armchair" 
                className="w-full h-full object-cover object-right transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </div>
            <div className="w-[314px] h-[242px] shrink-0 overflow-hidden group relative cursor-pointer rounded-sm">
              <img 
                src={Vase} 
                alt="Vase and camera on stool" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </div>
          </div>
        </div>

        <div className="w-[295px] h-[392px] shrink-0 overflow-hidden group relative cursor-pointer rounded-sm">
          <img 
            src={Diningroom} 
            alt="Dining room centerpiece" 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
        </div>

        <div className="flex flex-col gap-4 items-start justify-center w-[740px] shrink-0">
          <div className="flex items-end gap-4 w-full">
            <div className="w-[290px] h-[348px] shrink-0 overflow-hidden group relative cursor-pointer rounded-sm">
              <img 
                src={Bedroom} 
                alt="Bedroom cozy setup" 
                className="w-full h-full object-cover transition-transform duration-500 
                group-hover:scale-105"/>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </div>
            <div className="w-[434px] h-[433px] shrink-0 overflow-hidden group relative cursor-pointer rounded-sm">
              <img 
                src={Brickwall} 
                alt="Brick wall dining daylight" 
                className="w-full h-full object-cover transition-transform duration-500 
                group-hover:scale-105"/>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </div>
          </div>
          
          <div className="flex items-start gap-4 w-full">
            <div className="w-[178px] h-[242px] shrink-0 overflow-hidden group relative cursor-pointer rounded-sm">
              <img 
                src={Frame} 
                alt="Frame mockup with vase" 
                className="w-full h-full object-cover transition-transform duration-500 
                group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 
              transition-colors duration-300" />
            </div>
            <div className="w-[258px] h-[196px] shrink-0 overflow-hidden group relative cursor-pointer 
            rounded-sm">
              <img 
                src={Kitchen}
                alt="Kitchen wall geometric tiles" 
                className="w-full h-full object-cover transition-transform duration-500
                 group-hover:scale-105"/>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors 
              duration-300" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
