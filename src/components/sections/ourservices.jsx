

import { FaCircle } from "react-icons/fa";
import Services from "../../assets/data/serviceslist";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

import useAOS from "../../hooks/useAos";






const OurServices = () => {
    useAOS();
    
    
    return(
    <section className="py-10 bg-bgcolor2" id="our-services">
     
            {/* <div className=" mx-auto mt-16 flex px-2 py-2 items-center justify-center  shadow-lg w-[300px] rounded-[10px]"  >
            
                      <FaCircle className="fill-Secondarycolor  h-2" />
                      <h3 className="text-3xl px-3 text-textcolor font-semibold">Our Services</h3>
                      <FaCircle className="fill-Secondarycolor h-2 " />
                    </div>
          
            <p className="text-center text-base sm:text-lg md:text-xl text-textcolor md:max-w-lg mx-auto py-6 b-12">
                We offer a wide range of digital solutions to help your business grow.
            </p> */}
            <section className=" px-6 flex items-center justify-center flex-col py-10 mb-12">
      <div className="flex mb-4 items-center justify-left flex-row ">
                         <FaCircle className="fill-Secondarycolor  h-3" />
                    <h3 className="text-2xl px-3 text-textcolor font-medium">Our Services</h3>
                    </div>
        <h2 className="text-3xl md:text-4xl text-center font-semibold mb-4 text-textcolor2" data-aos="fade-up">
        Transform Your Business  <br></br>with Expert Solutions
        </h2>
        <p className="mt-4 text-textcolor2 text-center md:max-w-sm leading-relaxed">
          Tailored customer support to boost satisfaction and drive growth.
        </p>
      </section>
            

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4  pt-5 gap-4 px-6 md:px-20">
        {Services.map((service, index) => (
        < Link to={service.link}
        key={index}
        
        className="block bg-gradient-to-t from-bgcolor to-bgcolor2 hover:bg-white py-10 px-4 rounded-lg text-emibold shadow-md shadow-Primarycolor text-left transition-colors duration-300 group" data-aos="fade-in"
      ><h3 className="text-2xl  text-gray-300  group-hover:text-Secondarycolor font-semibold   mb-4">
              {service.title}
            </h3>

             <BsArrowUpRightCircleFill
                className="absolute bottom-2 right-2 fill-Secondarycolor group-hover:fill-textcolor z-10  rounded-full p-1 text-5xl shadow-lg cursor-pointer transition-all duration-300"
              />
            <p className="text-gray-400   text-base   group-hover:text-textcolor mb-4"> {service.description}</p>

            <div className="relative">
              <img
                src={service.Picture}
                alt="service"
                className="object-cover  w-full h-[250px]  pt-3 rounded-md"
              />
             
            </div>
            </Link>
        ))}
      </div>

{/*             
            <div className="grid md:grid-cols-3 gap-8">
                {services.map((service, idx) => (
                    <div key={idx} className="bg-white rounded-lg shadow p-8 text-center hover:shadow-lg transition">
                        <div className="flex justify-center mb-4">{service.icon}</div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-700">{service.title}</h3>
                        <p className="text-gray-500">{service.description}</p>
                    </div>
                ))}
            </div> */}
 
    </section>
)};

export default OurServices;

