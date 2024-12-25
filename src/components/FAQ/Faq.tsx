import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "../ui/button";

export function Faq() {
  return (
    <div className="w-full max-w-7xl mx-auto my-10 p-8 bg-gradient-to-r from-blue-50 to-white shadow-lg rounded-3xl">

      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          3D Simulation FAQs
        </h1>
        <p className="text-lg md:text-xl text-gray-600 font-medium">
          We're here to answer your questions and provide resources for a
          seamless learning experience.
        </p>
      </div>

      <div className="flex justify-center gap-4 mb-10">
        <Button
          variant="outline"
          className="rounded-full px-6 py-3 border-2 border-blue-500 text-blue-500 font-semibold hover:bg-blue-500 hover:text-white transition duration-300"
        >
          More Questions
        </Button>
        <Button
          variant="solid"
          className="rounded-full px-6 py-3 bg-blue-500 text-white font-semibold hover:bg-blue-600 transition duration-300"
        >
          Contact Us
        </Button>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-xl font-semibold text-gray-700 hover:text-blue-500 transition duration-300">
              Is it accessible?
            </AccordionTrigger>
            <AccordionContent className="text-base text-gray-600 font-medium mt-2">
              Yes. It adheres to the WAI-ARIA design pattern, ensuring it’s
              usable for everyone.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="text-xl font-semibold text-gray-700 hover:text-blue-500 transition duration-300">
              Is it styled?
            </AccordionTrigger>
            <AccordionContent className="text-base text-gray-600 font-medium mt-2">
              Yes. It comes with modern, polished styles for an aesthetic look.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-xl font-semibold text-gray-700 hover:text-blue-500 transition duration-300">
              Is it animated?
            </AccordionTrigger>
            <AccordionContent className="text-base text-gray-600 font-medium mt-2">
              Absolutely. Smooth animations are built-in to enhance the user
              experience.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
