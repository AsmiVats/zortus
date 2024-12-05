import { FunctionComponent } from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";

import { Button } from "../ui/button";

export type ContainerType = {
  className?: string;
};

const ServiceCard: FunctionComponent<ContainerType> = ({ className = "" }) => {

  return (
    <div className={`m-auto p-12 rounded-lg shadow-md font-plus-jakarta ${className}`}>
      <header className="mb-4">
        <h1 className="text-xl text-gray-900">Quizzes</h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col space-y-4">
          <p className="text-gray-700 text-sm">
            With a user-centered approach, the goal was to create an intuitive interface
            for effortless financial management while incorporating gamification.
          </p>
          <ul className="space-y-2 text-sm w-[70%]">
            <li className="flex items-center bg-gray-200 gap-2 p-3 rounded-full ">
            <IoIosCheckmarkCircle size={'25px'} />
              <span className="text-gray-800 font-medium"> Awesome visual identities & logo(s)</span>
            </li>
            <li className="flex items-center bg-gray-200 gap-2 p-3 rounded-full ">
            <IoIosCheckmarkCircle size={'25px'} />
              <span className="text-gray-800 font-medium"> Awesome visual identities & logo(s)</span>
            </li>
            <li className="flex items-center bg-gray-200 gap-2 p-3 rounded-full ">
            <IoIosCheckmarkCircle size={'25px'} />
              <span className="text-gray-800 font-medium"> Awesome visual identities & logo(s)</span>
            </li>
          </ul>
        </div>

        <div className="flex items-center justify-center">
          <div className="w-[400px] h-[225px] bg-gray-300 rounded-lg"></div> {/* Placeholder for image */}
        </div>
      </div>

      <footer className="mt-6">
        <Button className="border-none bg-transparent text-black shadow-none hover:bg-transparent">
          View Project →
        </Button>
      </footer>
    </div>
  );
};

export default ServiceCard;
