import About from '@/components/About/About'
import Details from '@/components/Details/Details'
import { Faq } from '@/components/FAQ/Faq'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import Services from '@/components/Services/Services'
import Navbar from '@/components/Header/Navbar'
import BlogSection from '@/components/Blogs/Blogs'

function Home() {
  return (
    <div className='p-2'>
      <Navbar/>
      <Header/>
      <Details/>
      <Services/>
      <div className='bg-[#FAFAFA]'>
         <About/>
      <Faq/>
      <BlogSection/>
      <Footer/>
      </div>
     
      </div>
  )
}

export default Home