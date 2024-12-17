import { FaPlusCircle } from "react-icons/fa";
import "video-react/dist/video-react.css";
import { Player } from "video-react";

function Details() {
  return (
    <div className="flex flex-col gap-12 p-6 lg:p-12 min-h-screen font-plus-jakarta">
      <div className=" flex justify-center items-start m-auto  w-full text-left ">
        <h1 className="text-[48px] font-[600] text-[#010205]">
          Zortus, the revolutionary platform that transforms the way education is delivered!
        </h1>
        <p className=" text-[16px] p-4 font-[500] text-[#878C91] leading-8 tracking-wide">
          At ZORTUS, we believe in inclusive education. Our platform supports a wide range of Indian languages, ensuring that educators can effectively cater to a diverse student body and break down language barriers in education.
        </p>
      </div>

      {/* video nd card section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center justify-center w-full">

        <div className="flex-1 max-w-md lg:max-w-lg bg-gradient-to-r from-black via-gray-800 to-gray-900 text-white p-8 rounded-xl shadow-lg">
          <h2 className="text-6xl lg:text-8xl font-bold mb-4">
            920<span className="text-green-500">+</span>
          </h2>
          <p className="text-lg text-gray-300 mb-6">Models to choose from</p>
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-gray-500 rounded-full overflow-hidden">
              <img
                src="https://via.placeholder.com/50"
                alt="User"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-14 h-14 bg-gray-500 rounded-full"></div>
            <div className="w-14 h-14 bg-gray-500 rounded-full"></div>
            <div className="w-14 h-14 bg-gray-500 rounded-full"></div>
            <FaPlusCircle className="text-green-500 text-3xl" />
          </div>
        </div>

        <div className="flex-1 max-w-md lg:max-w-lg bg-gray-200 rounded-xl shadow-lg overflow-hidden relative">
          <Player playsInline>
            <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
          </Player>
        </div>
      </div>
    </div>
  );
}

export default Details;
