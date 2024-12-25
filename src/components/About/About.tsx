import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { HiArrowRight, HiArrowLeft } from "react-icons/hi"

interface AboutItem {
  title: string
  body: string
}

const aboutUs: AboutItem[] = [
  {
    title: "Pioneering Technology",
    body: "ZORTUS stands at the forefront of educational innovation, harnessing cutting-edge generative AI and 3D simulation to elevate the learning experience."
  },
  {
    title: "Immersive Learning",
    body: "Our advanced tools empower educators to deliver highly interactive and immersive teaching solutions that resonate with today's digital-native learners."
  },
  {
    title: "Personalized Education",
    body: "We believe in tailoring the learning experience to each student's unique needs, ensuring better engagement and improved outcomes."
  },
  {
    title: "Global Reach",
    body: "ZORTUS is committed to making quality education accessible worldwide, breaking down geographical barriers through our innovative platform."
  },
  {
    title: "Continuous Innovation",
    body: "We're constantly pushing the boundaries of what's possible in EdTech, staying ahead of the curve to provide the best tools for educators and students alike."
  },
]

export default function About() {
  const [currentIndex] = useState(0)

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-7xl mx-auto my-8 p-4 md:p-6 font-plus-jakarta bg-gradient-to-br from-[#FAFAFA] to-[#F0F0F0]"
    >
      <Carousel 
        className="w-full"
      >
        <CarouselContent>
          {aboutUs.map((item, index) => (
            <CarouselItem key={index}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="border-none shadow-lg bg-white/80 backdrop-blur-sm">
                    <CardHeader className="pb-2">
                      <motion.h3 
                        className="text-2xl md:text-3xl lg:text-4xl font-bold p-3 text-gray-800"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                      >
                        {item.title}
                      </motion.h3>
                    </CardHeader>
                    <CardContent>
                      <motion.p 
                        className="text-lg md:text-xl lg:text-2xl font-medium leading-relaxed p-3 text-gray-600"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                      >
                        {item.body}
                      </motion.p>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatePresence>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex flex-col md:flex-row items-center justify-between mt-6 md:mt-8">
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold p-3 text-gray-900 mb-4 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            Why Choose Zortus?
          </motion.h2>
          <div className="flex items-center gap-4 p-3">
            <CarouselPrevious className="h-12 w-12 bg-white/80 hover:bg-white rounded-full border-none shadow-md transition-all duration-300">
              <HiArrowLeft className="h-6 w-6 text-gray-800" />
            </CarouselPrevious>
            <div className="flex space-x-2">
              {aboutUs.map((_, index) => (
                <motion.div
                  key={index}
                  className={`h-2 w-2 rounded-full ${index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'}`}
                  initial={{ scale: 0.8 }}
                  animate={{ scale: index === currentIndex ? 1.2 : 1 }}
                  transition={{ duration: 0.3 }}
                />
              ))}
            </div>
            <CarouselNext className="h-12 w-12 bg-white/80 hover:bg-white rounded-full border-none shadow-md transition-all duration-300">
              <HiArrowRight className="h-6 w-6 text-gray-800" />
            </CarouselNext>
          </div>
        </div>
      </Carousel>
    </motion.div>
  )
}