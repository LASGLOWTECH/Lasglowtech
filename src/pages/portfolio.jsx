import React from "react";
import { Link } from "react-router-dom";
import SEO from "../utils/seo";
import useAOS from "../hooks/useAos";
import Subscription from "../components/sections/subscription";
import { Gradient, Land1 , Land2, Slide1,Graphic1,Graphic2, Web1, Mobile1  } from "../components/images";
const portfolioItems = [
    {
        title: "E-Commerce Website",
        description: "A modern online store with secure payments and product management.",
        image: "https://source.unsplash.com/400x300/?ecommerce,website",
    },
    {
        title: "Business Landing Page",
        description: "A sleek landing page to showcase business services and capture leads.",
        image: "https://source.unsplash.com/400x300/?business,landingpage",
    },
    {
        title: "Portfolio Website",
        description: "A personal portfolio to display projects and skills.",
        image: "https://source.unsplash.com/400x300/?portfolio,web",
    },
    {
        title: "Blog Platform",
        description: "A responsive blog with user authentication and content management.",
        image: "https://source.unsplash.com/400x300/?blog,website",
    },
];

export default function Portfolio() {
    const refreshAOS = useAOS();
    return (
        <div className="min-h-screen  py-16 bg-gradient-to-r from-bgcolor to-bgcolor2  px-4 sm:px-6">

   <SEO
                               title="Lasglowtech | Portfolio"
                                description="Care to know who we have worked for, here is our portfolio "
                                keywords="Home, Lasglowtech digital services"
                                url="https://www.lasglowtech.com.ng.com/portfolio"

                           />

 <div
                        className="absolute amimate-pulse inset-0 bg-cover min-h-screen  bg-center"
                        style={{ backgroundImage: `url(${Gradient})` }}
                    >
                        <div className="absolute bg-center bg-cover inset-0 bg-bgcolor/80" />
                    </div>





            
                       <div className=" relative z-10  overflow-hidden">
 <section className="flex flex-col  items-center justify-center py-16  mx-auto shadow-sm">
                                    <h1 className="text-6xl text-textcolor2 pt-8 font-semibold" data-aos="zoom-up"> Portfolio</h1>
                            
                            
                            <div className="mt-8 border border-gray-200 p-3 rounded-full text-textcolor2">
                              <div className="text-base text-violet-600 cursor-pointer z">
                                <span className="font-semibold"></span> <Link to="/" className="hover:underline">Home</Link>  / <Link to="/portfolio" className="hover:underline">Portfolio</Link>
                              </div>
                            </div>
                                   
                            
                                  </section>
                <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
                    Our Portfolio
                </h2>
                <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {portfolioItems.map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            <Subscription />
        </div>
    );
}