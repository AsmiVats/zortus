import { Card, CardContent, CardHeader } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
// import { ChevronLeft, ChevronRight } from 'lucide-react'
import { HiArrowRight , HiArrowLeft } from "react-icons/hi";


const aboutUs = [
    {
        title: "Pioneering Technology:",
        body: "ZORTUS stands at the forefront of educational innovation, harnessing cutting-edge generative AI and 3D simulation to elevate the learning experience. Our advanced tools empower educators to deliver highly interactive and immersive teaching solutions that resonate with today's digital-native learners."
    },
    {
        title: "Pioneering Technology 1:",
        body: "ZORTUS stands at the forefront of educational innovation, harnessing cutting-edge generative AI and 3D simulation to elevate the learning experience. Our advanced tools empower educators to deliver highly interactive and immersive teaching solutions that resonate with today's digital-native learners."
    },
    {
        title: "Pioneering Technology 2:",
        body: "ZORTUS stands at the forefront of educational innovation, harnessing cutting-edge generative AI and 3D simulation to elevate the learning experience. Our advanced tools empower educators to deliver highly interactive and immersive teaching solutions that resonate with today's digital-native learners."
    },
    {
        title: "Pioneering Technology 3:",
        body: "ZORTUS stands at the forefront of educational innovation, harnessing cutting-edge generative AI and 3D simulation to elevate the learning experience. Our advanced tools empower educators to deliver highly interactive and immersive teaching solutions that resonate with today's digital-native learners."
    },
    {
        title: "Pioneering Technology 4:",
        body: "ZORTUS stands at the forefront of educational innovation, harnessing cutting-edge generative AI and 3D simulation to elevate the learning experience. Our advanced tools empower educators to deliver highly interactive and immersive teaching solutions that resonate with today's digital-native learners."
    },
]

export default function About() {
  return (
    <div className="w-full max-w-7xl mx-auto my-4 p-6 font-plus-jakarta bg-[#FAFAFA]">
      
  
      <Carousel className="w-full ">
        <CarouselContent>
          {aboutUs.map((item, index) => (
            <CarouselItem key={index}>
              <Card className="border-none shadow-none">
                <CardHeader className="pb-2">
                  <h3 className="text-xl text-[36px] font-[600] p-3">{item.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-[28px] font-[400] leading-relaxed p-3">
                    {item.body}
                  </p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex items-center justify-between mt-4">
          <h2 className="text-[40px] font-[700] p-3">Why Choose Zortus?</h2>
          <div className="flex bottom-4 right-6 absolute gap-1 p-3">
            <CarouselPrevious className="h-10 w-10 bg-transparent rounded-full border-none">
              <HiArrowLeft className="h-10 w-10 bg-transparent" />
            </CarouselPrevious>
            <CarouselNext className="h-10 w-10 bg-transparent rounded-full border-none">
              <HiArrowRight className="h-10 w-10" />
            </CarouselNext>
          </div>
        </div>
      </Carousel>
    </div>
  )
}

