import React from "react";
import { useNavigate } from "react-router-dom";
import about from '/src/assets/about.jpg';
import {
  Sofa,
  Truck,
  ShieldCheck,
  Award,
} from "lucide-react";

const AboutSection = () => {

    const navigate = useNavigate()

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6 lg:px-12">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          <div className="relative">
            <img
              src={about}
              alt="Furniture"
              className="rounded-3xl shadow-2xl w-full h-[600px] object-cover"
            />

            <div className="absolute -bottom-8 left-8 bg-white p-6 rounded-2xl shadow-xl">
              <h2 className="text-4xl font-bold text-[#B88E2F]">10+</h2>
              <p className="text-gray-600">
                Years of Crafting Premium Furniture
              </p>
            </div>
          </div>

          <div>

            <span className="text-[#B88E2F] uppercase tracking-widest font-semibold">
              About Us
            </span>

            <h2 className="text-4xl lg:text-5xl font-bold mt-4 leading-tight text-gray-900">
              Creating Beautiful Spaces With
              <span className="text-[#B88E2F]"> Quality Furniture</span>
            </h2>

            <p className="text-gray-600 mt-6 leading-8">
              We believe furniture is more than just decoration—it creates
              comfort, warmth, and unforgettable memories. Our mission is to
              provide stylish, durable, and affordable furniture that transforms
              every house into a beautiful home.
            </p>

            <button 
            onClick={() => navigate("/shop")}
            className="mt-10 bg-[#B88E2F] hover:bg-[#9b7525] text-white px-8 py-4 rounded-xl font-semibold transition duration-300">
              Explore Collection
            </button>

          </div>

        </div>


        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-28 text-center">

          <div className="bg-white rounded-2xl shadow-md py-10">
            <h2 className="text-4xl font-bold text-[#B88E2F]">10K+</h2>
            <p className="text-gray-600 mt-2">
              Happy Customers
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md py-10">
            <h2 className="text-4xl font-bold text-[#B88E2F]">500+</h2>
            <p className="text-gray-600 mt-2">
              Premium Products
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md py-10">
            <h2 className="text-4xl font-bold text-[#B88E2F]">25+</h2>
            <p className="text-gray-600 mt-2">
              Design Awards
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md py-10">
            <h2 className="text-4xl font-bold text-[#B88E2F]">99%</h2>
            <p className="text-gray-600 mt-2">
              Customer Satisfaction
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;