import { FunctionComponent } from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { Button } from "../ui/button";

export type ContainerType = {
  className?: string;
};
// const data =[
//   {
//     title:"Quizzes",
//     description:" With a user-centered approach, the goal was to create an intuitive interface for effortless financial management while incorporating gamification.",
//     features:[
//       "Awesome visual identities & logo(s)",
//       "Engaging user experiences",
//       "Streamlined financial tracking",
//     ],
//     images:""
//   },
//   {
//     title:"PPT Generation",
//     description:"With user-centered approach, the goals was to create an intuitive interface for effortless financial management while  incorporating gamification.",
//     features:[
//       "Awesome visual identities & logo(s)",
//       "Engaging user experiences",
//       "Streamlined financial tracking",
//     ],
//     images:""
//   },

//   {
//     title:"3D Simulation",
//     description:" With a user-centered approach, the goal was to create an intuitive interface for effortless financial management while incorporating gamification.",
//     features:[
//       "Awesome visual identities & logo(s)",
//       "Engaging user experiences",
//       "Streamlined financial tracking",
//     ],
//     images:""
//   },
//   {
//     title:"Document Converter",
//     description:" With a user-centered approach, the goal was to create an intuitive interface for effortless financial management while incorporating gamification.",
//     features:[
//       "Awesome visual identities & logo(s)",
//       "Engaging user experiences",
//       "Streamlined financial tracking",
//     ],
//     images:""
//   },

// ]


const ServiceCard: FunctionComponent<ContainerType> = ({ className = "" }) => {
  return (
    <div
      className={`service-card mx-auto max-w-screen-lg p-4 sm:p-6 md:p-8 lg:p-12 rounded-lg shadow-lg transition-all duration-200 hover:shadow-xl font-plus-jakarta ${className}`}
    >
      <header className="mb-4 md:mb-6 text-center md:text-left">
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">Quizzes</h1>
      </header>

      <div className="grid grid-cols-1 gap-4 sm:gap-6 md:gap-8 md:grid-cols-2 items-center">
        <div className="flex flex-col space-y-4 md:space-y-6">
          <p className="text-gray-700 text-sm sm:text-base md:text-base leading-relaxed">
            With a user-centered approach, the goal was to create an intuitive interface
            for effortless financial management while incorporating gamification.
          </p>
          <ul className="space-y-2 sm:space-y-3">
            {[
              "Awesome visual identities & logo(s)",
              "Engaging user experiences",
              "Streamlined financial tracking",
            ].map((text, index) => (
              <li
                key={index}
                className="flex items-center gap-3 p-3 rounded-full bg-gray-200 shadow-md hover:shadow-lg transition-shadow"
              >
                <IoIosCheckmarkCircle size="20px" className="text-green-500" />
                <span className="text-gray-800 font-medium text-sm sm:text-base md:text-base">{text}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-center">
          <div className="w-full h-40 sm:h-48 md:w-[300px] md:h-[200px] lg:w-[400px] lg:h-[225px] bg-gray-300 rounded-lg overflow-hidden animate-pulse"></div>
        </div>
      </div>

      <footer className="mt-6 md:mt-8 text-left">
        <Button
          className="px-3 sm:px-4 py-2 sm:py-3 md:px-6 md:py-3 text-white  rounded-full shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
        >
          View Project →
        </Button>
      </footer>
    </div>
  );
};

export default ServiceCard;
