import { useState } from "react";
import SEO from "../utils/seo";
import { Gradient, Land1, Land2, Slide1, Graphic1, Graphic2, Web1, Mobile1 } from "../components/images";
import Subscription from "../components/sections/subscription";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import useAOS from "../hooks/useAos";
import { FaCircle } from "react-icons/fa";


// const services = [
//     {
//         title: "Web Development",
//         description:
//             "Custom, responsive websites built with modern technologies to help your business grow online.",
//         icon: (
//             <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                 <path d="M3 4a1 1 0 011-1h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4z" />
//                 <path d="M8 21V11h8v10" />
//             </svg>
//         ),
//     },
//     {
//         title: "E-Commerce Solutions",
//         description:
//             "Robust online stores with secure payment integration and seamless user experience.",
//         icon: (
//             <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                 <path d="M3 3h2l.4 2M7 13h10l4-8H5.4" />
//                 <circle cx="7" cy="21" r="1" />
//                 <circle cx="17" cy="21" r="1" />
//             </svg>
//         ),
//     },
//     {
//         title: "SEO Optimization",
//         description:
//             "Improve your website’s visibility and ranking on search engines with our expert SEO services.",
//         icon: (
//             <svg className="w-10 h-10 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                 <path d="M12 20l9-5-9-5-9 5 9 5z" />
//                 <path d="M12 12V4" />
//             </svg>
//         ),
//     },
//     {
//         title: "Maintenance & Support",
//         description:
//             "Ongoing website updates, security monitoring, and technical support for peace of mind.",
//         icon: (
//             <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                 <path d="M12 8v4l3 3" />
//                 <circle cx="12" cy="12" r="10" />
//             </svg>
//         ),
//     },
// ];
const services = [
  {
    title: "Web Development Solutions",
    subtitle: "Web Development",
    description:
      "We build responsive, secure, and high-performance websites using the latest web technologies. From simple landing pages to complex platforms, our solutions are tailored to help your business grow online.",
    image: Web1,
  },
  {
    title: "Creative Graphic Design",
    subtitle: "Graphic Design",
    description:
      "Our design team delivers visually compelling graphics that communicate your brand identity effectively. From social media assets to complete branding kits, we help your business stand out with professional, modern design.",
    image: Graphic1,
  },
  {
    title: "Mobile App Development",
    subtitle: "Mobile Applications",
    description:
      "We design and develop custom mobile applications that offer seamless performance across devices. Whether you're launching an MVP or scaling an existing app, we provide user-focused solutions for Android and iOS.",
    image: Mobile1,
  },
  {
    title: "User-Centered Web Design",
    subtitle: "UI/UX Design",
    description:
      "We believe in doing more with less and doing it better. At Lasglowtech, we value smart automation that cuts the busywork and tools that help you scale without breaking the bank. Whether it's streamlining your workflow, speeding up project delivery, or helping your team stay focused on what really matters, we're all about efficient growth with zero compromise on quality. We create clean, intuitive, and user-friendly interfaces that enhance digital experiences. Our UI/UX design approach combines functionality with visual appeal to keep users engaged and satisfied.",
    image: Graphic2,
  },
  {
    title: "Maintenance & Optimization",
    subtitle: "Website Support & SEO",
    description:
      "Improve your website’s visibility and ranking on search engines with our expert SEO services, ongoing website updates, security monitoring, and technical support for peace of mind. From regular updates and security monitoring to performance tuning and SEO optimization, we offer ongoing support to keep your website secure, visible, and running at peak performance.",
    image: Graphic2,
  },
];

export default function Services() {
  const aos = useAOS()

  const [active, setActive] = useState(0);
  return (
    <div className=" min-h-screen  py-16 bg-gradient-to-r from-bgcolor to-bgcolor2"
    >



      <SEO
        title="Lasglowtech | Our Services"
        description="Are you aware of what our delivearables are?, this is where creative solutions are chanelled to your organization,
                                business or brand big all small, our solutions cut across "
        keywords="Home, Lasglowtech digital services"
        url="https://www.lasglowtech.com.ng.com/services"

      />

      <div
        className="absolute amimate-pulse inset-0 bg-cover min-h-screen   bg-center"
        style={{ backgroundImage: `url(${Gradient})` }}
      >
        <div className="absolute bg-center bg-cover inset-0 bg-bgcolor/80" />
      </div>

      <div className=" relative z-10  overflow-hidden">

        <section className="flex flex-col  items-center justify-center py-16  mx-auto shadow-sm">
          <h1 className="text-6xl text-textcolor2 pt-8 font-semibold" data-aos="zoom-up"> Services</h1>


          <div className="mt-8 border border-gray-200 p-3 rounded-full text-textcolor2">
            <div className="text-base text-violet-600 cursor-pointer z">
              <span className="font-semibold"></span> <Link to="/" className="hover:underline">Home</Link>  / <Link to="/services" className="hover:underline">Services</Link>
            </div>
          </div>


        </section>



        <div className=" px-6  py-6 mx-auto ">
          <h1 className="text-3xl font-medium text-center text-textcolor2 mb-4">Digital Solutions</h1>
          <p className="mx-auto text-gray-400  md: max-w-lg text-center mb-12">
            We offer a wide range of services to help your business succeed online. use ther buttons to navigate our variious services
          </p>


          <section className=" text-textcolor2 flex flex-col md:flex-row items-center justify-center px-4 md:px-20 py-12 gap-6">
            {/* Vertical/Horizontal Slim Buttons */}
            <div className="flex md:flex-col justify-center items-center ">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActive(index)}
                  className={`transition-all duration-300 ${active === index ? "bg-gradient-to-r from-Primarycolor to-Primarycolor" : "border border-Primarycolor"
                    } w-24 h-4 md:w-3 md:h-28 `}
                />
              ))}
            </div>

            {/* Content Panel */}
            <div className="flex flex-col-reverse md:flex-row items-center  justify-between flex-1 gap-8">
              {/* Left Text */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={active + "_left"}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="md:w-1/2"
                >
                  <p className="uppercase text-sm tracking-wider text-Secondarycolor font-semibold mb-4">
                    {services[active].subtitle}
                  </p>
                  <h2 className="text-3xl md:text-5xl tracking-tight font-medium mb-8">{services[active].title}</h2>
                  <p className="text-base text-gray-400 leading-relaxed">
                    {services[active].description}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Right Image */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={active + "_img"}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.4 }}
                  className="md:w-1/2  w-full flex justify-center"
                >
                  <img
                    src={services[active].image}
                    alt={services[active].title}
                    className=" w-full h-full md:max-w-[600px] rounded-2xl shadow-Primarycolor shadow-md" data-aos='fadeup'
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </section>
          {/* <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {services.map((service, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow"
                        >
                            <div className="mb-4">{service.icon}</div>
                            <h2 className="text-xl font-semibold mb-2 text-gray-800">{service.title}</h2>
                            <p className="text-gray-600">{service.description}</p>
                        </div>
                    ))}
                </div> */}
        </div>

      </div>







      <Subscription />
    </div>
  );
}