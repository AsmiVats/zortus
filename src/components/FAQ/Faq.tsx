import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { Button } from "../ui/button"
  
  export function Faq() {
    return (
        <div className=" w-full max-w-7xl font-plus-jakarta flex justify-center items-center m-auto rounded-2xl bg-white p-6">

            <div className=" w-2/3 m-auto ">
                <h1 className="font-[600] text-[48px] my-2">
                3D Simulation FAQs
                </h1>
                <p className="text-[#878C91] font-[500] text-[16px]  my-4">
                As a leading education  agency, we are dedicated to providing comprehensive educational resources and answering frequently asked questions to help our clients.
                </p>
                <div className="flex justify-start items-start gap-4 mt-6">
                    <Button variant={"outline"} className="rounded-full p-2">More Questions</Button>
                    <Button variant={'ghost'} className="rounded-full p-2">Contact Us</Button>
                </div>
            </div>
            <div className="w-[70%]">
      <Accordion type="single" collapsible className="">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-xl font-plus-jakarta">Is it accessible?</AccordionTrigger>
          <AccordionContent className="text-base text-[#878C91] font-plus-jakarta">
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-xl font-plus-jakarta">Is it styled?</AccordionTrigger>
          <AccordionContent className="text-base text-[#878C91] font-plus-jakarta">
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-xl font-plus-jakarta">Is it animated?</AccordionTrigger>
          <AccordionContent className="text-base text-[#878C91] font-plus-jakarta">
            Yes. It&apos;s animated by default, but you can disable it if you
            prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      </div>
      </div>
    )
  }
  