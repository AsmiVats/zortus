import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { FaArrowRight } from "react-icons/fa";
import { Card, CardDescription, CardHeader } from '@/components/ui/card';
import { useEffect, useState } from 'react';
import { Progress } from '@/components/ui/progress';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Header() {
  const [progress, setProgress] = useState(13);
  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (statsInView) {
      const timer = setTimeout(() => setProgress(66), 500);
      return () => clearTimeout(timer);
    }
  }, [statsInView]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerChildren = {
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center min-h-screen px-4 lg:px-8 max-w-[1440px] mx-auto">
      {/* Left Section */}
      <motion.div 
        className="w-full lg:w-[55%] pt-10 lg:pt-0"
        initial="hidden"
        animate="visible"
        variants={staggerChildren}
      >
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight"
          variants={fadeInUp}
        >
          Welcome to{' '}
          <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Zortus
          </span>{' '}
          <br/>
          Empowering 
          <br/>Educators
        </motion.h1>

        <motion.p 
          className="text-base md:text-lg text-gray-600 dark:text-gray-300 mt-6 max-w-2xl"
          variants={fadeInUp}
        >
          At ZORTUS, we empower teachers, professors, and educators to elevate their teaching
          methodologies through innovative tools and creative content preparation. Enhance your
          lesson planning and engage your students like never before.
        </motion.p>

        <motion.div 
          className="flex flex-wrap gap-4 mt-8"
          variants={fadeInUp}
        >
          <Button 
            className="rounded-full text-base group transition-all duration-300 hover:scale-105"
          >
            Get in Touch 
            <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Link 
            to="" 
            className="inline-flex items-center text-base text-blue-600 hover:text-blue-700 font-medium hover:underline"
          >
            View Products
          </Link>
        </motion.div>

        <motion.div 
          className="mt-12 border-t pt-8"
          variants={fadeInUp}
        >
          <p className="text-sm font-semibold mb-4">Trusted by world's biggest brands</p>
          <div className="flex flex-wrap gap-8 items-center">
            {[1, 2, 3].map((index) => (
              <motion.img
                key={index}
                src={`/logo${index}.svg`}
                alt={`Partner logo ${index}`}
                className="h-8 md:h-10 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Right Section */}
      <motion.div 
        className="w-full lg:w-[45%] mt-12 lg:mt-0"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.img
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1950&q=80"
            alt="Education"
            className="rounded-2xl object-cover h-48 md:h-64 w-full shadow-lg hover:shadow-xl transition-shadow duration-300"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          />

          <motion.div 
            ref={statsRef}
            className="relative"
          >
            <Card className="bg-gray-50 dark:bg-gray-800 p-6 h-full">
              <CardHeader className="p-0">
                <motion.span 
                  className="text-5xl font-bold"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={statsInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5 }}
                >
                  230+
                </motion.span>
              </CardHeader>
              <CardDescription className="mt-4 text-base">
                Schools have signed up with our Smartboard-based solutions
              </CardDescription>
              <Progress value={progress} className="mt-4" />
            </Card>
          </motion.div>
        </div>

        <motion.img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1951&q=80"
          alt="Collaboration"
          className="mt-6 rounded-2xl w-full h-64 object-cover shadow-lg hover:shadow-xl transition-shadow duration-300"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        />
      </motion.div>
    </div>
  );
}

export default Header;