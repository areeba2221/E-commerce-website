import Mask from '/src/assets/Mask.png';

const ProductDesciption = () => {
    return (
        <>
        <section className="border-t border-[#D9D9D9] font-Poppins">
            <div className="flex justify-center items-center p-4 py-[48px] gap-12">
                <span className="text-[#000000] font-medium text-[24px]">Description</span>
                <span className="text-[#9F9F9F] font-normal text-[24px]">Additional Information</span>
                <span className="text-[#9F9F9F] font-normal text-[24px]">Reviews [5]</span>
            </div>

            <p className="px-[207px] text-[#9F9F9F] text-[16px] mb-7">
                Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo 
                speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes 
                the show on the road.
            </p>
            <p className="px-[207px] text-[#9F9F9F] text-[16px] mb-7">
                Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled 
                engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a
                 compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and 
                 extended highs for a sound that is both articulate and pronounced. The analogue knobs 
                 allow you to fine tune the controls to your personal preferences while the 
                 guitar-influenced leather strap enables easy and stylish travel.
            </p>

            <div className="flex justify-center items-center gap-7 p-4">
                <div className=" relative w-[605px] h-[348px] bg-[#F9F1E7] rounded-[10px]">
                    <img 
                              src={Mask} 
                              alt="Background"  
                              className="w-full h-full object-cover absolute"  />
                </div>
                <div className=" relative w-[605px] h-[348px] bg-[#F9F1E7] rounded-[10px]">
                     <img 
                              src={Mask} 
                              alt="Background"  
                              className="w-full h-full object-cover absolute"  />
                </div>
            </div>

        </section>
        </>
    );
}
 
export default ProductDesciption;