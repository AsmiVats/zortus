import Component1 from "@/assets/Component 1.svg";
import { FaPhone } from "react-icons/fa6";
import { MdMail, MdLocationOn } from "react-icons/md";
import { FaLinkedinIn, FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-100 font-plus-jakarta">
      <div className="mx-auto max-w-screen-xl space-y-12 px-6 py-16 lg:space-y-16">

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[3fr,1fr,1fr,1fr] lg:gap-8">

          <div>
            <img src={Component1} alt="Zortus Logo" />

            <p className="mt-4 max-w-md text-gray-600">
              Stay tuned for more insightful articles, tips, and stories from educators who are
              transforming their classrooms with ZORTUS!
            </p>

            <ul className="mt-6 flex space-x-4">
              <li>
                <a
                  href="#"
                  className="text-gray-700 transition hover:text-gray-900"
                  aria-label="Facebook"
                >
                  <FaFacebookF className="h-5 w-5" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 transition hover:text-gray-900"
                  aria-label="Instagram"
                >
                  <FaInstagram className="h-5 w-5" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 transition hover:text-gray-900"
                  aria-label="Twitter"
                >
                  <FaTwitter className="h-5 w-5" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 transition hover:text-gray-900"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn className="h-5 w-5" />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-lg font-medium text-gray-900">Navigation</p>
            <ul className="mt-6 space-y-4 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-gray-900">
                  Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Agency
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Case Study
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Resource
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-lg font-medium text-gray-900">License</p>
            <ul className="mt-6 space-y-4 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-gray-900">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Copyright
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Email Address
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-lg font-medium text-gray-900">Contact Us</p>
            <ul className="mt-6 space-y-4 text-sm text-gray-600">
              <li>
                <a href="#" className="flex items-center gap-2">
                  <MdMail className="text-gray-900" />
                  <span>john@doe.com</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2">
                  <FaPhone className="text-gray-900" />
                  <span>0123456789</span>
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MdLocationOn className="text-gray-900" />
                <address className="not-italic">213 Lane, London, United Kingdom</address>
              </li>
            </ul>
          </div>
        </div>

        <p className="text-center text-xs text-gray-500">
          &copy; 2024 Zortus. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
