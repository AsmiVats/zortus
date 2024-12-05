import { Link } from 'react-router-dom'
import { Button } from '../ui/button'
import { FaArrowRight } from "react-icons/fa";
import img1 from "@/assets/img1.jpg"
import img2 from "@/assets/img2.png"
import { Card, CardDescription, CardHeader } from '../ui/card';
import { useEffect, useState } from 'react';
import { Progress } from '../ui/progress';
import logo1 from "@/assets/logo1.svg"
import logo2 from "@/assets/logo2.svg"
import logo3 from "@/assets/logo3.svg"


function Header() {
  const [progress, setProgress] = useState(13)

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])

    return (
      <div className='flex justify-center'>
      <div className='font-plus-jakarta w-[60%] m-auto p-10'>
        <h1 className="text-[72px] font-[600] p-3">
          Welcome to{' '}
          <span className="bg-zortus-gradient bg-clip-text text-transparent">
            Zortus
          </span>{' '}
          <br/>
          Empowering 
          <br/>Educators
        </h1>
        <p className='font-[500] text-[16px] text-[#878C91] p-3 my-2 leading-7 tracking-wide'>
          At ZORTUS, we empower teachers, professors, and educators to elevate their teaching
          methodologies through innovative tools and creative content preparation. Enhance your
          lesson planning and engage your students like never before.
        </p>
        <div  className='flex justify-start items-start gap-6 p-3 '>
          <Button className="rounded-full">Get in Touch <FaArrowRight /></Button>
          <Link to="https://cp-algorithms.com/">View Products</Link>
        </div>

        {/* trusted companies section */}
        <div className='flex justify-start items-start p-3 mt-2'>
          <p className='font-semibold text-sm w-[20%]'>Trusted by world's biggest brands</p>
          <div className='flex gap-4 p-2 justify-center items-center'>
            <img src={logo1}/>
            <img src={logo2}/>
            <img src={logo3}/>
          </div>
        </div>

     

      </div>
      <div className="grid grid-rows-[auto,auto] gap-6 p-4 w-[40%] ">
  <div className="grid grid-cols-2 items-center gap-4 mt-4">
    <div className="relative">
      <img src={img2} alt="" className="w-full h-full object-cover rounded-lg" />
    </div>

    {/* <div className='' > */}
      <Card className="bg-[#F0F0F0] p-4 mt-2  flex flex-col font-plus-jakarta ">
        <CardHeader className="text-5xl md:text-7xl text-left font-bold text-gray-800">230+</CardHeader>
        <CardDescription className="text-[#5C5D5F] mt-2"> 
          Schools have signed up with our Smartboard-based solutions
        </CardDescription>
        <Progress value={progress} className="w-full my-4" />
      </Card>

    {/* </div> */}
  </div>
  <div>
    <img src={img1} alt="" className="w-full h-auto object-cover rounded-lg" />
  </div>
</div>



      </div>
    );
  }
  
  export default Header;
  