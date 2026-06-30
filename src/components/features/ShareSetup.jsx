import { shareSetupContent, shareSetupImages } from "/src/data/Data";

export default function ShareSetup() {
  return (
    <section className="w-full bg-white py-14 overflow-hidden select-none">
      <div className="text-center mb-8">
        <p
          className="text-[#616161] text-[20px] mb-2 tracking-wide font-medium"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          {shareSetupContent.subtitle}
        </p>
        <h2
          className="text-[40px] font-bold text-[#3A3A3A] leading-[120%]"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          {shareSetupContent.title}
        </h2>
      </div>

      <div className="flex justify-center items-center gap-4 w-full min-w-[1700px] mx-auto h-[720px]">
        <div className="flex flex-col gap-4 items-end justify-center w-[510px] shrink-0">
          <div className="flex items-end gap-4 w-full">
            <div className="w-[80px] h-[382px] shrink-0 overflow-hidden group relative cursor-pointer rounded-sm">
              <img
                src={shareSetupImages.leftTop.image}
                alt={shareSetupImages.leftTop.alt}
                className="w-full h-full object-cover object-right transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </div>
            <div className="w-[414px] h-[312px] shrink-0 overflow-hidden group relative cursor-pointer rounded-sm">
              <img
                src={shareSetupImages.leftCenter.image}
                alt={shareSetupImages.leftCenter.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </div>
          </div>

          <div className="flex items-start gap-4 w-full">
            <div className="w-[180px] h-[323px] shrink-0 overflow-hidden group relative cursor-pointer rounded-sm">
              <img
                src={shareSetupImages.leftBottom.image}
                alt={shareSetupImages.leftBottom.alt}

                className="w-full h-full object-cover object-right transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </div>
            <div className="w-[314px] h-[242px] shrink-0 overflow-hidden group relative cursor-pointer rounded-sm">
              <img
                src={shareSetupImages.leftRight.image}
                alt={shareSetupImages.leftRight.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </div>
          </div>
        </div>

        <div className="w-[295px] h-[392px] shrink-0 overflow-hidden group relative cursor-pointer rounded-sm">
          <img
            src={shareSetupImages.center.image}
            alt={shareSetupImages.center.alt}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
        </div>

        <div className="flex flex-col gap-4 items-start justify-center w-[740px] shrink-0">
          <div className="flex items-end gap-4 w-full">
            <div className="w-[290px] h-[348px] shrink-0 overflow-hidden group relative cursor-pointer rounded-sm">
              <img
                src={shareSetupImages.rightTop.image}
                alt={shareSetupImages.rightTop.alt}
                className="w-full h-full object-cover transition-transform duration-500 
                group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </div>
            <div className="w-[434px] h-[433px] shrink-0 overflow-hidden group relative cursor-pointer rounded-sm">
              <img
                src={shareSetupImages.rightLarge.image}
                alt={shareSetupImages.rightLarge.alt}
                className="w-full h-full object-cover transition-transform duration-500 
                group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </div>
          </div>

          <div className="flex items-start gap-4 w-full">
            <div className="w-[178px] h-[242px] shrink-0 overflow-hidden group relative cursor-pointer rounded-sm">
              <img
                src={shareSetupImages.rightBottom.image}
                alt={shareSetupImages.rightBottom.alt}
                className="w-full h-full object-cover transition-transform duration-500 
                group-hover:scale-105"
              />
              <div
                className="absolute inset-0 bg-black/0 group-hover:bg-black/10 
              transition-colors duration-300"
              />
            </div>
            <div
              className="w-64.5 h-49 shrink-0 overflow-hidden group relative cursor-pointer 
            rounded-sm"
            >
              <img
                src={shareSetupImages.rightSmall.image}
                alt={shareSetupImages.rightSmall.alt}
                className="w-full h-full object-cover transition-transform duration-500
                 group-hover:scale-105"
              />
              <div
                className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors 
              duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
