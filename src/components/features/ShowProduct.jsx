import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { productData } from "/src/data/Data";
import { useCart } from "/src/context/CartContext";
import { StarIcon, RightArrow, Facebook, Linkedin, Twitter } from "/src/assets/Svg";


export default function ProductDetails() {
    const { id } = useParams();

    const baseId = id ? id.split("-")[0] : "";
    const product = productData.find((p) => String(p.id) === baseId) || productData[0];

    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState("L");
    const [selectedColor, setSelectedColor] = useState("purple");
    const [activeTabImg, setActiveTabImg] = useState(product?.image || "");

    const { addToCart } = useCart();

    if (!product) {
        return <div className="text-center py-20 font-medium">Product not found.</div>;
    }
    const sizes = ["L", "XL", "XS"];
    const colors = [
        { id: "purple", class: "bg-[#816DFA]" },
        { id: "black", class: "bg-[#000000]" },
        { id: "gold", class: "bg-[#B88E2F]" },
    ];

   
    const productImages = [
        product.image,                            
        product.images?.[1] || product.image,     
        product.images?.[2] || product.image,     
        product.images?.[3] || product.image      
    ];

    return (
        <>
            <nav className="w-full flex items-center  gap-3 text-[16px] text-[#9F9F9F] bg-[#F9F1E7] px-6 py-6 rounded mb-10">
                <Link to="/" className="hover:text-black transition-colors ml-9">Home</Link>
                <RightArrow />
                <Link to="/shop" className="hover:text-black transition-colors">Shop</Link>
                <RightArrow />
                <div className="w-px h-7 bg-[#9F9F9F]" />
                <span className="text-black font-medium">{product.name}</span>
            </nav>
            <main className="max-w-[1440px] mx-auto px-4 md:px-16 py-10 font-Poppins ">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                    <div className="flex flex-col-reverse md:flex-row gap-8">

                        <div className="flex md:flex-col gap-4">
                            {productImages.map((imgUrl, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveTabImg(imgUrl)}
                                    className={`w-[76px] h-[80px] bg-[#F9F1E7] rounded-[10px] 
                                        overflow-hidden p-2 transition-all
                                         ${activeTabImg === imgUrl ? "ring-2 ring-[#f5dca2]" : "opacity-80 hover:opacity-100"
                                        }`}>
                                    <img src={imgUrl} alt={`View ${index + 1}`} className="w-full h-full object-cover rounded-md" />
                                </button>
                            ))}
                        </div>

                        <div className="bg-[#F9F1E7] rounded-[10px] flex-1 max-w-[423px] h-[540px] aspect-500/550 
                        flex items-center justify-center p-4">
                            <img
                                src={activeTabImg || product.image}
                                alt={product.name}
                                className="w-full h-[470px] object-contain mix-blend-multiply" />
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <h1 className="text-[42px] font-normal text-black mb-1">{product.name}</h1>
                        <p className="text-[24px] font-medium text-[#9F9F9F] mb-4">{product.price}</p>

                        <div className="flex items-center gap-4 mb-4">
                            <div className="flex items-center gap-1">
                                {[1, 2, 3, 4, 5].map((s) => (
                                    <StarIcon key={s} filled={s <= 4} />
                                ))}
                            </div>
                            <div className="w-px h-5 bg-[#9F9F9F]"></div>
                            <span className="text-[#9F9F9F] text-[13px]">5 Customer Reviews</span>
                        </div>

                        <p className="text-[13px] text-black leading-relaxed max-w-[424px] mb-6">
                            Setting the bar as one of the loudest speakers in its class, the Kilburn is a
                            compact, stout-hearted hero with a well-balanced audio which boasts a clear
                            midrange and extended highs for a sound.
                        </p>

                        <div className="mb-6">
                            <span className="text-[14px] text-[#9F9F9F] block mb-3">Size</span>
                            <div className="flex gap-4">
                                {sizes.map((size) => (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={`w-8 h-8 rounded-[5px] text-[13px] flex items-center 
                                            justify-center transition-colors
                                             ${selectedSize === size ? "bg-[#B88E2F] text-white"
                                                : "bg-[#F9F1E7] text-black hover:bg-zinc-200"
                                            }`}>
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="mb-8">
                            <span className="text-[14px] text-[#9F9F9F] block mb-3">Color</span>
                            <div className="flex gap-4">
                                {colors.map((color) => (
                                    <button
                                        key={color.id}
                                        onClick={() => setSelectedColor(color.id)}
                                        className={`w-7.5 h-7.5 rounded-full ${color.class} 
                                        transition-transform ${selectedColor === color.id ?
                                                "scale-110 ring-2 ring-offset-2 ring-[#B88E2F]" : ""
                                            }`} />
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-4 pb-12 border-b
                         border-[#D9D9D9] mb-8">
                            <div className="flex items-center justify-between border border-[#9F9F9F] 
                            rounded-[10px] w-[123px] h-[64px] px-4">
                                <button
                                    onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                                    className="text-[16px] font-medium hover:text-[#B88E2F]">-</button>
                                <span className="font-medium text-black">{quantity}</span>
                                <button
                                    onClick={() => setQuantity(prev => prev + 1)}
                                    className="text-[16px] font-medium hover:text-[#B88E2F]">+</button>
                            </div>

                            <button 
                            onClick={() => addToCart (product, quantity, selectedSize, selectedColor)}
                            className="w-[215px] h-16 px-12 border border-black rounded-[15px] 
                            text-[20px] hover:bg-black hover:text-white transition-all">
                                Add To Cart
                            </button>
                            <button className="w-[215px] h-16 px-12 border border-black rounded-[15px]
                             text-[20px] hover:bg-black hover:text-white transition-all">
                                + Compare
                            </button>
                        </div>

                        <div className="flex flex-col gap-3 text-[16px] text-[#9F9F9F]">
                            <div className="flex">
                                <span className="w-24"> SKU</span>
                                <span>: SS001</span>
                            </div>
                            <div className="flex">
                                <span className="w-24">Category</span>
                                <span>: Sofas</span>
                            </div>
                            <div className="flex">
                                <span className="w-24">Tags</span>
                                <span>: Sofa, Chair, Home, Shop</span>
                            </div>
                            <div className="flex items-center">
                                <span className="w-24">Share</span>
                                <span>:</span>

                                <span className="flex items-center ml-2 gap-3 text-black text-lg">
                                    <Facebook />
                                    <Linkedin />
                                    <Twitter />
                                </span>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </>

    );
}
